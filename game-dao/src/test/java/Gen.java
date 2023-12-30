import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.OutputFile;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;
import org.junit.jupiter.api.Test;

import java.util.HashMap;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/11/16 16:43
 */
public class Gen {
	@Test
	public void gen() throws ClassNotFoundException {
		String base = System.getProperty("user.dir") + "/";
		Class.forName("com.mysql.cj.jdbc.Driver");
		FastAutoGenerator.create("jdbc:mysql://test-cc.xingyunyfs.com:3306/game_up?serverTimezone=Asia/Shanghai&createDatabaseIfNotExist=true&characterEncoding=utf8&useSSL=false&autoReconnect=true",
						"game_up", "YNZnWxYwhEddzJTF")
				.globalConfig(builder -> {
					builder.author("chen.chao") // 设置作者
							.disableOpenDir()
							.commentDate("yyyy-MM-dd hh:mm:ss")//注释日期
							.dateType(DateType.TIME_PACK)   //定义生成的实体类中日期的类型 TIME_PACK=LocalDateTime;ONLY_DATE=Date;
							.enableSwagger() // 开启 swagger 模式
							.outputDir(base + "src/main/java"); // 指定输出目录
				})
				.packageConfig(builder -> {
					HashMap<OutputFile, String> map = new HashMap<>();
					map.put(OutputFile.xml, base + "src/main/resources/mapper");
//					map.put(OutputFile.mapper, base + "src/main/java/dao");
//					map.put(OutputFile.controller, base + "src/main/java/controller");
					builder.parent("org.geek.chen.game.upgradation.dao") // 设置父包名
							.mapper("mapper")
							.pathInfo(map); // 设置mapperXml生成路径
				})
				.strategyConfig(builder -> {
					builder
							.addInclude("user")
							.entityBuilder().enableLombok().disableSerialVersionUID().formatFileName("%sEntity")
							.mapperBuilder().enableMapperAnnotation()
							.serviceBuilder()
							.formatServiceFileName("%sBaseService")//格式化 service 接口文件名称，%s进行匹配表名，如 UserService
							.formatServiceImplFileName("%sBaseServiceImpl")//格式化 service 实现类文件名称，%s进行匹配表名，如 UserServiceImpl
							.controllerBuilder().enableRestStyle();
				})
				.templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
				.templateConfig(builder -> builder.controller("")) // 不生成controller
				.execute();

	}
}
