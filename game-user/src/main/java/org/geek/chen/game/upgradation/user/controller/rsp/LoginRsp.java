package org.geek.chen.game.upgradation.user.controller.rsp;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import com.iohao.game.widget.light.protobuf.ProtoFileMerge;
import lombok.Data;
import lombok.experimental.Accessors;

import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_FILE_NAME;
import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_PACKAGE_NAME;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/30 11:19
 */
@Data
@Accessors(chain = true)
@ProtobufClass
@ProtoFileMerge(fileName = USER_FILE_NAME, filePackage = USER_PACKAGE_NAME)
public class LoginRsp {

	String jwt;
}
