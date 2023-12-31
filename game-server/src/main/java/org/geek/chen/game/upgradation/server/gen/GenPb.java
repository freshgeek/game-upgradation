package org.geek.chen.game.upgradation.server.gen;

import com.iohao.game.common.kit.ArrayKit;
import com.iohao.game.widget.light.protobuf.ProtoGenerateFile;

import java.io.File;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/31 13:00
 */
public class GenPb {
	public static void main(String[] args) {
		/*
		 * .proto 文件生成
		 * 相关文档 https://www.yuque.com/iohao/game/vpe2t6
		 *
		 * ######################################################
		 * 会将项目的 pb 生成到当前项目的 target/proto/common.proto 文件中
		 * ######################################################
		 */

		// 需要扫描的包名
		String currentDir = System.getProperty("user.dir");

		// 生成 .proto 文件存放的目录
		String generateFolder = ArrayKit.join(new String[]{
				"/Users/chenchao/code/person/game-upgradation/game-cocos/game-up/assets/iogame"
				, "pb"
				, "user"
		}, File.separator);

		ProtoGenerateFile protoGenerateFile = ProtoGenerateFile.builder()
				// 源码目录
				.protoSourcePath(currentDir)
				// 需要扫描的包名
				.protoPackagePath("org.geek.chen.game.upgradation")
				// 生成 .proto 文件存放的目录
				.generateFolder(generateFolder)
				.build();

		// 生成 .proto 文件
		protoGenerateFile.generate();
	}
}
