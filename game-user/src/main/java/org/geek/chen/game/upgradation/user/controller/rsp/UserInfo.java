package org.geek.chen.game.upgradation.user.controller.rsp;

import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.geek.chen.game.upgradation.dao.entity.UserEntity;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/30 11:24
 */
@EqualsAndHashCode(callSuper = true)
@Data
@ProtobufClass
public class UserInfo extends UserEntity {

}
