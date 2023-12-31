package org.geek.chen.game.upgradation.user.controller.req;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import com.iohao.game.widget.light.protobuf.ProtoFileMerge;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_FILE_NAME;
import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_PACKAGE_NAME;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 18:43
 */
@Data
@Accessors(chain = true)
@ProtobufClass
@FieldDefaults(level = AccessLevel.PUBLIC)
@ProtoFileMerge(fileName = USER_FILE_NAME, filePackage = USER_PACKAGE_NAME)
public class LoginReq {

	String name;
	String password;
	// cc-todo 区服
}
