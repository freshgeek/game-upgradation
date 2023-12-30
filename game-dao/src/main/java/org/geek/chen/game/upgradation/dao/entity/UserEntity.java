package org.geek.chen.game.upgradation.dao.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 *  用户表
 * </p>
 *
 * @author chen.chao
 * @since 2023-12-30 10:27:27
 */
@Getter
@Setter
@TableName("user")
@ApiModel(value = "UserEntity对象", description = " 用户表 ")
public class UserEntity implements Serializable {


    @ApiModelProperty(" id ")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(" 用户名 ")
    private String username;

    @ApiModelProperty(" 密码 ")
    private String password;

    @ApiModelProperty(" 邮箱 ")
    private String email;

    @ApiModelProperty(" 手机号 ")
    private String phone;

    @ApiModelProperty(" 性别：1-男；0女 ;2-未知")
    private Integer gender;

    @ApiModelProperty(" 生日 ")
    private LocalDate birthday;

    @ApiModelProperty(" 地址 ")
    private String address;

    @ApiModelProperty(" 创建时间 ")
    private LocalDateTime createTime;

    @ApiModelProperty(" 最后登录时间 ")
    private LocalDateTime lastLoginTime;

    @ApiModelProperty(" 状态:0-正常；1-封禁 ")
    private Integer statusField;


}
