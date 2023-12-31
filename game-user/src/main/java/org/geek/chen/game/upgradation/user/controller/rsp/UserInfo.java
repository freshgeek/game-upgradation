package org.geek.chen.game.upgradation.user.controller.rsp;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.iohao.game.widget.light.protobuf.ProtoFileMerge;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_FILE_NAME;
import static org.geek.chen.game.upgradation.common.pb.ProtoFileMerge.USER_PACKAGE_NAME;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/30 11:24
 */
//@EqualsAndHashCode(callSuper = true)
@Data
@ProtobufClass
@FieldDefaults(level = AccessLevel.PUBLIC)
@ProtoFileMerge(fileName = USER_FILE_NAME, filePackage = USER_PACKAGE_NAME)
public class UserInfo {

	@ApiModelProperty(" id ")
	@TableId(value = "id", type = IdType.AUTO)
	Long id;

	@ApiModelProperty(" 用户名 ")
	String username;

	@ApiModelProperty(" 密码 ")
	String password;

	@ApiModelProperty(" 邮箱 ")
	String email;

	@ApiModelProperty(" 手机号 ")
	String phone;

	@ApiModelProperty(" 性别：1-男；0女 ;2-未知")
	Integer gender;

	@ApiModelProperty(" 地址 ")
	String address;


	@ApiModelProperty(" 状态:0-正常；1-封禁 ")
	Integer statusField;

}
