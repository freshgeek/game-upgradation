package org.geek.chen.game.upgradation.common.rsp;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;
import lombok.AccessLevel;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.FieldDefaults;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 18:47
 */
@Data
@ToString
@ProtobufClass
@FieldDefaults(level = AccessLevel.PUBLIC)
public class Resp {
	int code;
	@Protobuf
	String msg;

	@Protobuf
	Object data;

	private Resp(int code, String msg, Object data) {
		this.code = code;
		this.msg = msg;
		this.data = data;
	}

	public Resp() {
	}

	public static Resp success(Object data) {
		return new Resp(0, "成功", data);
	}

	public static Resp success() {
		return success(null);
	}
}
