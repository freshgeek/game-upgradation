package org.geek.chen.game.upgradation.server.mock;

import com.iohao.game.external.client.AbstractInputCommandRegion;
import com.iohao.game.external.client.InputCommandRegion;
import com.iohao.game.external.client.join.ClientRunOne;
import org.geek.chen.game.upgradation.user.cmd.UserCmdModule;
import org.geek.chen.game.upgradation.user.controller.req.LoginReq;
import org.geek.chen.game.upgradation.user.controller.rsp.LoginRsp;
import org.geek.chen.game.upgradation.user.controller.rsp.UserInfo;

import java.util.List;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 17:42
 */
public class ClientMock {

	public static void main(String[] args) {
		// 模拟请求数据
		List<InputCommandRegion> inputCommandRegions = List.of(
				new AbstractInputCommandRegion() {
					@Override
					public void initInputCommand() {
						// 模拟请求的主路由
						inputCommandCreate.cmd = UserCmdModule.MAIN_CMD;

						// ---------------- 模拟请求   ----------------
						ofCommand(UserCmdModule.LOGIN).setTitle("cc").setRequestData(() -> {
							return new LoginReq().setName("admin").setPassword("123456");
						}).callback(result -> {
							System.out.println("收到回信了：" + result.getValue(LoginRsp.class));
						});

						// ---------------- 模拟请求   ----------------
						ofCommand(UserCmdModule.GET_USER_INFO).setTitle("cc").callback(result -> {
							System.out.println("收到回信了：" + result.getValue(UserInfo.class));
						});

						ofListen(result -> {
							System.out.println("收到广播了：" + result);
						}, 2, "listenValue");
					}

				}
		);

		// 启动模拟客户端
		ClientRunOne clientRunOne = new ClientRunOne();
		clientRunOne.setInputCommandRegions(inputCommandRegions)
				.startup();
	}
}
