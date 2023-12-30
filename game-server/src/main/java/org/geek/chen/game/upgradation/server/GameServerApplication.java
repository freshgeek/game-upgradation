package org.geek.chen.game.upgradation.server;

import com.iohao.game.action.skeleton.ext.spring.ActionFactoryBeanForSpring;
import org.geek.chen.game.upgradation.user.GameUserLogicServer;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author chen.chao
 * @email 1163518793@qq.com
 * @date 2023/12/29 21:25
 */
@ComponentScan("org.geek.chen.game.upgradation")
@MapperScan("org.geek.chen.game.upgradation.dao.mapper")
@SpringBootApplication
public class GameServerApplication {
	@Bean
	public ActionFactoryBeanForSpring actionFactoryBean() {
		// 将业务框架交给 spring 管理
		return ActionFactoryBeanForSpring.me();
	}

	public static void main(String[] args) {

		SpringApplication.run(GameServerApplication.class, args);

		// 启动逻辑服务
		GameUserLogicServer.run();

	}


}
