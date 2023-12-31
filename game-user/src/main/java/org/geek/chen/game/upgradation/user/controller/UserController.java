package org.geek.chen.game.upgradation.user.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.jwt.JWT;
import com.iohao.game.action.skeleton.annotation.ActionController;
import com.iohao.game.action.skeleton.annotation.ActionMethod;
import com.iohao.game.action.skeleton.core.flow.FlowContext;
import com.iohao.game.bolt.broker.client.kit.ExternalCommunicationKit;
import com.iohao.game.bolt.broker.client.kit.UserIdSettingKit;
import org.geek.chen.game.upgradation.dao.entity.UserEntity;
import org.geek.chen.game.upgradation.dao.service.UserBaseService;
import org.geek.chen.game.upgradation.user.controller.req.LoginReq;
import org.geek.chen.game.upgradation.user.controller.rsp.LoginRsp;
import org.geek.chen.game.upgradation.user.controller.rsp.UserInfo;
import org.geek.chen.game.upgradation.user.exception.GameUserEnum;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Optional;

import static org.geek.chen.game.upgradation.user.cmd.UserCmdModule.*;


/**
 * @author chenchao
 */
@Component
@ActionController(MAIN_CMD)
public class UserController {

	@Resource
	UserBaseService userBaseService;

	@Value("${game.jwt.key}")
	String jwtKey;

	@ActionMethod(LOGIN)
	public LoginRsp loginReq(LoginReq req, FlowContext flowContext) {
		// https://www.yuque.com/iohao/game/tywkqv
		Optional<UserEntity> userEntity = userBaseService.lambdaQuery()
				.eq(UserEntity::getUsername, req.getName())
				.eq(UserEntity::getPassword, req.getPassword()).oneOpt();

		GameUserEnum.USER_NAME_OR_PASSWORD_ERROR.assertTrue(userEntity.isPresent());
		GameUserEnum.USER_HAS_BAN.assertTrue(userEntity.get().getStatusField() == 0);

		// （相当于顶号），强制断开之前的客户端连接，并让本次登录成功。
		ExternalCommunicationKit.forcedOffline(userEntity.get().getId());

		// 成功后必须 设置才算成功
		// 暂时拿用户玩家角色id 带区服的
		boolean b = UserIdSettingKit.settingUserId(flowContext, userEntity.get().getId());

		GameUserEnum.LOGIN_ERROR_RETRY.assertTrue(b);
		return new LoginRsp().setJwt(
				JWT.create()
						.setHeader("userId", userEntity.get().getId())
						.setKey(jwtKey.getBytes())
						.sign());
	}

	@ActionMethod(GET_USER_INFO)
	public UserInfo getInfo(FlowContext flowContext) {
		long userId = flowContext.getUserId();

		Optional<UserEntity> userEntity = userBaseService.lambdaQuery().eq(UserEntity::getId, userId).oneOpt();
		GameUserEnum.USER_NOT_EXISTS.assertTrue(userEntity.isPresent());

		return BeanUtil.copyProperties(userEntity.get(), UserInfo.class);
	}
}
