package org.geek.chen.game.upgradation.user.controller.req;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 18:43
 */
@Data
@Accessors(chain = true)
@ProtobufClass
public class LoginReq {

	String name;
	String password;
}
