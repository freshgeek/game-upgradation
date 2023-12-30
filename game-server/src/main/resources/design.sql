

create table game_player
(
    id          bigint unsigned auto_increment primary key comment '玩家角色id',
    server_no   int         not null comment '区服',
    user_id     bigint      not null comment '用户id',
    player_name varchar(20) not null comment '玩家昵称',
    player_ip   varchar(20) not null comment '玩家ip',
    player_port int         not null comment '玩家端口',
    player_type int         not null comment '玩家类型：1-玩家；2-管理员',
    create_time timestamp   not null default current_timestamp comment '创建时间',
    last_login  timestamp   not null default current_timestamp comment '最后登录时间',
    unique key uk_user_id_server_no (user_id, server_no)
) engine = innodb comment '玩家角色表';

create table player_attribute
(
    id          bigint unsigned auto_increment primary key comment 'id',
    user_id     bigint    not null comment '用户id',
    player_id   bigint    not null comment '玩家角色id',
    attr_type   int       not null comment '属性类型：1-生命；2-攻击；3-防御',
    attr_value  int       not null comment '属性值',
    create_time timestamp not null default current_timestamp comment '创建时间',
    last_update timestamp not null default current_timestamp comment '最后更新时间'
) engine = innodb comment '玩家属性表-待分析';

create table sys_equip
(
    id          bigint unsigned auto_increment primary key comment 'id',
    equip_name  varchar(20)  not null comment '装备名称',
    equip_type  int          not null comment '装备类型：1-武器；2-防具；3-装饰品',
    equip_level int          not null comment '装备等级',
    equip_desc  varchar(200) not null comment '装备描述',
    attr_type   int          not null comment '属性类型：1-生命；2-攻击；3-防御',
    attr_value  int          not null comment '属性值',
    create_time timestamp    not null default current_timestamp comment '创建时间',
    update_time timestamp    not null default current_timestamp on update current_timestamp comment '最后更新时间'
) engine = innodb comment '系统装备表-待分析';

create table sys_equip_record
(
    id          bigint unsigned auto_increment primary key comment 'id',
    equip_name  varchar(20)  not null comment '装备名称',
    equip_type  int          not null comment '装备类型：1-武器；2-防具；3-装饰品',
    equip_level int          not null comment '装备等级',
    equip_desc  varchar(200) not null comment '装备描述',
    attr_type   int          not null comment '属性类型：1-生命；2-攻击；3-防御',
    attr_value  int          not null comment '属性值',
    create_time timestamp    not null default current_timestamp comment '创建时间',
    update_time timestamp    not null default current_timestamp on update current_timestamp comment '最后更新时间'
) engine = innodb comment '系统装备爆出实例表-待分析';

create table player_equip
(
    id          bigint unsigned auto_increment primary key comment 'id',
    user_id     bigint not null comment '用户id',
    player_id   bigint not null comment '玩家角色id',
    equip_type  int    not null comment '装备类型：1-武器；2-防具；3-装饰品',
    equip_id    int    not null comment '装备id',
    equip_level int    not null comment '装备等级'
) engine = innodb comment '玩家装备表-待分析';


create table game_server
(
    id          int unsigned auto_increment primary key comment ' id ',
    server_name varchar(20)  not null comment ' 服务器名称 ',
    server_ip   varchar(20)  not null comment ' 服务器ip ',
    server_port int          not null comment ' 服务器端口 ',
    server_type int          not null comment ' 服务器类型：1-游戏服务器；2-管理服务器 ',
    server_desc varchar(200) not null comment ' 服务器描述 '
) engine = innodb comment ' 服务器表 ';

