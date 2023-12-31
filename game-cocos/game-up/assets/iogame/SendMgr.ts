import {UserCmdModule} from "./cmd/CmdModule";
import {encodeLoginReq, LoginReq} from "./pb/user/User";
import {encodeExternalMessage} from "./pb/ExternalMessage";
import SocketClient from "./SocketClient";
import CmdMgr from "./cmd/CmdMgr";

export default class SendMgr {

    public static LoginVerify(data: LoginReq = null) {
        let msg: Uint8Array = encodeLoginReq(data);
        this.send(CmdMgr.getMergeCmd(UserCmdModule.MAIN_CMD, UserCmdModule.LOGIN), msg);
    }

    public static send(mergeCmd: number, data: Uint8Array, cmdCode: number = 1, protocolSwitch: number = 0) {
        let msg = {
            cmdCode: cmdCode,
            protocolSwitch: protocolSwitch,
            cmdMerge: mergeCmd,
            responseStatus: 0,
            validMsg: "",
            data: data
        }
        SocketClient.ins.send(encodeExternalMessage(msg));
    }
}
