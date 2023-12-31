import {_decorator, Component, director, Label} from 'cc';
import RequestCommand from '../iogame/RequestCommand';
import {UserCmdModule} from '../iogame/cmd/CmdModule';
import {ErrorCode} from '../iogame/ErrorCode';
import {ExternalMessage} from '../iogame/pb/ExternalMessage';
import {decodeUserInfo} from "db://assets/iogame/pb/user/User";
import LogUtils from "db://assets/iogame/LogUtils";

const {ccclass, property} = _decorator;

@ccclass('UserInfo')
export class UserInfo extends Component {

    // @property(Label)
    // attrNode: Label | null = null;
    start() {
        LogUtils.log('getComponent = > ', this.getComponent(Label))
        new RequestCommand(
            UserCmdModule.MAIN_CMD,
            UserCmdModule.GET_USER_INFO,
            null,
            this.getUserInfoHandler
        ).execute();
    }

    getUserInfoHandler = (data: ExternalMessage) => {
        if (ErrorCode.UN_LOGIN === data.responseStatus) {
            director.loadScene('login');
        } else {
            LogUtils.log(JSON.stringify(decodeUserInfo(data.data)))
            LogUtils.log('getComponent  --------', this.getComponent(Label))
            this.getComponent(Label).string = JSON.stringify(decodeUserInfo(data.data))
        }
        console.log(data);
    }


    update(deltaTime: number) {

    }
}

