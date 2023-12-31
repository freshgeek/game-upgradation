package org.geek.chen.game.upgradation.user;

import com.iohao.game.action.skeleton.core.BarSkeleton;
import com.iohao.game.action.skeleton.core.BarSkeletonBuilderParamConfig;
import com.iohao.game.action.skeleton.core.flow.interal.DebugInOut;
import com.iohao.game.bolt.broker.client.AbstractBrokerClientStartup;
import com.iohao.game.bolt.broker.core.client.BrokerClient;
import com.iohao.game.bolt.broker.core.client.BrokerClientBuilder;
import com.iohao.game.external.core.config.ExternalGlobalConfig;
import com.iohao.game.external.core.netty.simple.NettySimpleHelper;
import org.geek.chen.game.upgradation.user.cmd.UserCmdModule;
import org.geek.chen.game.upgradation.user.controller.UserController;

import java.util.List;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 16:17
 */
public class GameUserLogicServer extends AbstractBrokerClientStartup {

	public static void run() {
		// 权限拦截设置
		initAuth();
		// 启动游戏服务器
		int port = 10100;

		NettySimpleHelper.run(port, List.of(new GameUserLogicServer()));

	}

	private static void initAuth() {
		var accessAuthenticationHook = ExternalGlobalConfig.accessAuthenticationHook;
		// 表示登录才能访问业务方法
		accessAuthenticationHook.setVerifyIdentity(true);
		// 添加不需要登录（身份验证）也能访问的业务方法 (action)
		accessAuthenticationHook.addIgnoreAuthCmd(UserCmdModule.MAIN_CMD, UserCmdModule.LOGIN);
	}

	@Override
	public BarSkeleton createBarSkeleton() {
		// 业务框架构建器
		// 业务框架构建器 配置
		var config = new BarSkeletonBuilderParamConfig()
				// 扫描 action 类所在包
				.scanActionPackage(UserController.class);

		// 业务框架构建器
		var builder = config.createBuilder();

		// 添加控制台输出插件
		builder.addInOut(new DebugInOut());

		return builder.build();
	}

	@Override
	public BrokerClientBuilder createBrokerClientBuilder() {
		BrokerClientBuilder builder = BrokerClient.newBuilder();
		builder.appName("game user 逻辑服");
		return builder;
	}

}
