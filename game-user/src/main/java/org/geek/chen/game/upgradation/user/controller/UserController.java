package org.geek.chen.game.upgradation.user.controller;

import com.iohao.game.action.skeleton.annotation.ActionController;
import com.iohao.game.action.skeleton.annotation.ActionMethod;
import org.geek.chen.game.upgradation.user.controller.req.LoginReq;

import static org.geek.chen.game.upgradation.user.cmd.UserCmdModule.HELLO;
import static org.geek.chen.game.upgradation.user.cmd.UserCmdModule.MAIN_CMD;


/**
 * @author chenchao
 */
@ActionController(MAIN_CMD)
public class UserController {

	@ActionMethod(HELLO)
	public LoginReq hello(LoginReq req) {
		System.out.println("收到参数:" + req);
		return req.setName("hello " + req.getName());
	}

}
