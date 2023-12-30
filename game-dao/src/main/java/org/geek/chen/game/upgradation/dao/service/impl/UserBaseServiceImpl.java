package org.geek.chen.game.upgradation.dao.service.impl;

import org.geek.chen.game.upgradation.dao.entity.UserEntity;
import org.geek.chen.game.upgradation.dao.mapper.UserMapper;
import org.geek.chen.game.upgradation.dao.service.UserBaseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  用户表  服务实现类
 * </p>
 *
 * @author chen.chao
 * @since 2023-12-30 10:27:27
 */
@Service
public class UserBaseServiceImpl extends ServiceImpl<UserMapper, UserEntity> implements UserBaseService {

}
