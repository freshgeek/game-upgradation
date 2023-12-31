export default class CmdModule {

}

export enum UserCmdModule {
    /**
     * 主命令
     */
    MAIN_CMD = 1,


    /**
     * 子命令 登录
     */
    LOGIN = 0,

    /**
     * 子命令 注册
     */
    REGISTER = 1,

    /**
     * 获取用户基本信息
     */
    GET_USER_INFO = 2
}
