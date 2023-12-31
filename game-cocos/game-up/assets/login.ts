import {_decorator, Component, EditBox, Node} from 'cc';
import SocketClient from "db://assets/iogame/SocketClient";
import RequestCommand from "db://assets/iogame/RequestCommand";
import {UserCmdModule} from "db://assets/iogame/cmd/CmdModule";
import {encodeLoginReq} from "db://assets/iogame/pb/user/User";
import LogUtils from "db://assets/iogame/LogUtils";
import {ExternalMessage} from "db://assets/iogame/pb/ExternalMessage";

const {ccclass, property} = _decorator;

@ccclass('login')
export class login extends Component {

    @property(EditBox)
    accountInput: EditBox | null = null;

    account: string = '';

    @property(EditBox)
    passwordInput: EditBox | null = null;

    password: string = '';

    start() {
        SocketClient.ins.connect();
        RequestCommand.init(SocketClient.ins);

        this.accountInput.node.on('editing-did-ended', (editbox) => {
            this.account = editbox.string
        }, this)
        this.passwordInput.node.on('editing-did-ended', (editbox) => {
            this.password = editbox.string
        }, this)

        // 登录按钮
        this.node.on(Node.EventType.MOUSE_DOWN, this.loginHandler, this)
        this.node.on(Node.EventType.TOUCH_START, this.loginHandler, this)

    }

    loginHandler(event) {
        if (this.account && this.password) {
            LogUtils.info(`登录：${this.account} + ${this.password}`)
            new RequestCommand(
                UserCmdModule.MAIN_CMD,
                UserCmdModule.LOGIN,
                () => {
                    return encodeLoginReq({name: this.account, password: this.password});
                },
                (res: ExternalMessage) => {
                    LogUtils.log(res)
                    if (res.responseStatus === 0) {
                        LogUtils.info('登录成功')
                    } else {
                        LogUtils.warn('登录失败', res.responseStatus)
                    }
                }
            ).execute();
        }
    }

    onLoad() {
        LogUtils.log('onload')
    }

    update(deltaTime: number) {

    }
}

