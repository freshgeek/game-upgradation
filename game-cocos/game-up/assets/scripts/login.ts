import {_decorator, Component, director, EditBox, Node} from 'cc';
import RequestCommand from "db://assets/iogame/RequestCommand";
import {UserCmdModule} from "db://assets/iogame/cmd/CmdModule";
import {decodeLoginRsp, encodeLoginReq} from "db://assets/iogame/pb/user/User";
import LogUtils from "db://assets/iogame/LogUtils";
import {ExternalMessage} from "db://assets/iogame/pb/ExternalMessage";
import {SysConfig} from "db://assets/iogame/SysConfig";

const {ccclass, property} = _decorator;

@ccclass('login')
export class login extends Component {

    @property(EditBox)
    accountInput: EditBox | null = null;

    private account: string = '';

    @property(EditBox)
    passwordInput: EditBox | null = null;

    private password: string = '';

    onLoad() {
        LogUtils.log('onload')
    }

    start() {
        // 登录按钮
        this.node.on(Node.EventType.MOUSE_DOWN, this.loginHandler, this)
        this.node.on(Node.EventType.TOUCH_START, this.loginHandler, this)

    }

    loginHandler(event) {
        this.account = this.accountInput.getComponent(EditBox).string
        this.password = this.passwordInput.getComponent(EditBox).string
        if (!this.account) {
            LogUtils.warn('账号不能为空')
            return
        }
        if (!this.password) {
            LogUtils.warn('密码不能为空')
            return
        }
        if (this.account && this.password) {
            LogUtils.info(`登录：${this.account} + ${this.password}`)
            new RequestCommand(
                UserCmdModule.MAIN_CMD,
                UserCmdModule.LOGIN,
                () => {
                    LogUtils.log(`()=> 中的 ${this.account} + ${this.password}`)
                    return encodeLoginReq({name: this.account, password: this.password});
                },
                (res: ExternalMessage) => {
                    if (res.responseStatus === 0) {
                        LogUtils.log('登录成功,token', decodeLoginRsp(res.data))
                        localStorage.setItem(SysConfig.LOGIN_TOKEN, decodeLoginRsp(res.data).jwt)
                        director.loadScene('home')
                    } else {
                        LogUtils.warn('登录失败', res.responseStatus)
                    }
                }
            ).execute();
        }
    }


    update(deltaTime: number) {

    }
}

