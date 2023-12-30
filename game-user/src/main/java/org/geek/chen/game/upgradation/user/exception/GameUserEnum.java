package org.geek.chen.game.upgradation.user.exception;

import com.iohao.game.action.skeleton.core.exception.MsgExceptionInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;

import static org.geek.chen.game.upgradation.common.exception.CodeRange.USER_START;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/30 10:33
 */
@SuppressWarnings("AlibabaEnumConstantsMustHaveComment")
@Getter
@AllArgsConstructor
public enum GameUserEnum implements MsgExceptionInfo {

	USER_NAME_OR_PASSWORD_ERROR(USER_START + 1, "用户不存在或密码错误"),
	USER_HAS_BAN(USER_START + 2, "账号已封禁，请联系客服"),
	LOGIN_ERROR_RETRY(USER_START + 3, "登录失败，请检查网络后再试"),
	USER_NOT_EXISTS(USER_START + 4, "用户不存在"),

	;
	final int code;
	final String msg;
}
