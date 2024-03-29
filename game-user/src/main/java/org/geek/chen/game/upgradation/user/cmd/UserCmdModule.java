package org.geek.chen.game.upgradation.user.cmd;

import org.geek.chen.game.upgradation.common.cmd.CmdModule;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 16:53
 * @see initAuth 路由控制
 */
public interface UserCmdModule {
	/**
	 * 主命令
	 */
	int MAIN_CMD = CmdModule.USER_CMD;

	/**
	 *  子命令 测试
	 */
	int HELLO = 0;

}
