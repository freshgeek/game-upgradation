package org.geek.chen.game.upgradation.user.controller.rsp;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/30 11:19
 */
@Data
@Accessors(chain = true)
@ProtobufClass
public class LoginRsp {

	String jwt;
}
