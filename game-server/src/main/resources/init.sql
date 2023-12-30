use game_up;

drop table if exists user;

create table user
(
    id              bigint unsigned auto_increment primary key comment ' id ',
    username        varchar(20)  not null comment ' 用户名 ',
    password        varchar(20)  not null default '123456' comment ' 密码 ',
    email           varchar(50)  null comment ' 邮箱 ',
    phone           varchar(20)  null comment ' 手机号 ',
    gender          int          null     default 2 comment ' 性别：1-男；0女 ;2-未知',
    birthday        date         null comment ' 生日 ',
    address         varchar(100) not null default '' comment ' 地址 ',
    create_time     datetime     not null default current_timestamp comment ' 创建时间 ',
    last_login_time datetime     not null default current_timestamp on update current_timestamp comment ' 最后登录时间 ',
    status_field    int          not null default 0 comment ' 状态:0-正常；1-封禁 ',
    unique key uk_username (username),
    unique key uk_email (email),
    unique key uk_phone (phone)
) engine = innodb comment ' 用户表 ';

insert into user(username, password, email, phone, gender, birthday, address)
values ('admin', '123456', '', '13800138000', '1', '1990-01-01', '北京市');


