import ISocket from "db://assets/iogame/ISocket";
import SocketClient from "db://assets/iogame/SocketClient";
import {encodeExternalMessage} from "db://assets/iogame/pb/ExternalMessage";
import CmdMgr from "db://assets/iogame/cmd/CmdMgr";
import HandleMgr from "db://assets/iogame/HandleMgr";
import {hashFun} from "db://assets/iogame/HashUtils";
import LogUtils from "db://assets/iogame/LogUtils";

export default class RequestCommand {
    // 多实例方式，避免连多个问题
    static SC: ISocket = null;
    static counter: number = 0;

    static init(client: ISocket) {
        this.SC = client;
    }

    title: string = "RequestCommand";
    mainCmdCode: number = 0;
    subCmdCode: number = 0;
    data: Function = null;
    callback: Function = null;

    constructor(mainCmdCode: number, subCmdCode: number, data: Function, callback: Function) {
        this.mainCmdCode = mainCmdCode;
        this.subCmdCode = subCmdCode;
        this.data = data;
        this.callback = callback;
    }

    public execute(): void {
        // 执行
        let mergeCmd = CmdMgr.getMergeCmd(this.mainCmdCode, this.subCmdCode)
        let callHash = hashFun(this.callback)
        LogUtils.log("callHash", callHash)
        HandleMgr.addHandler(mergeCmd, this.callback);

        let msg = {
            cmdCode: 1,
            protocolSwitch: 0,
            cmdMerge: mergeCmd,
            responseStatus: 0,
            validMsg: "",
            msgId: callHash,
            data: this.data()
        }
        SocketClient.ins.send(encodeExternalMessage(msg));
    }

}
