import LogUtils from "./LogUtils";
import {decodeLoginRsp} from "./pb/user/User";
import IHandler from "./IHandler";

export default class LoginVerifyHandler implements IHandler {
    execute(data: Uint8Array) {

        let r_msg = decodeLoginRsp(data);
        LogUtils.log("LoginVerifyHandler", r_msg);
    }
}
