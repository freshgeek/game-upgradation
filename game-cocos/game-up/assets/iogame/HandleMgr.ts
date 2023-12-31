import {hashFun} from "db://assets/iogame/HashUtils";
import CmdMgr from "db://assets/iogame/cmd/CmdMgr";
import {ExternalMessage} from "db://assets/iogame/pb/ExternalMessage";
import LogUtils from "db://assets/iogame/LogUtils";

type Mapper = Record<string, Function>

export default class HandleMgr {


    private static handlers: Mapper = {};

    public static init(): void {
    }

    /**注册回调*/
    public static addHandler(cmdMerge: number, handler: Function): void {
        // if (HandleMgr.handlers[`${cmdMerge}_${hashFun(handler)}`] == undefined){
            LogUtils.log('add', `${cmdMerge}_${hashFun(handler)}`)
            HandleMgr.handlers[`${cmdMerge}_${hashFun(handler)}`] = handler
        // }else {
        //     LogUtils.log('add repeat 不覆盖的话 回调一些场景中拿不到this')
        // }
    }


    /**获取回调接口*/
    public static getHandler(cmdMerge: number, funHash: number): Function {
        var handler: Function;
        if (HandleMgr.handlers[`${cmdMerge}_${funHash}`])
            handler = HandleMgr.handlers[`${cmdMerge}_${funHash}`];
        if (handler == null) {
            console.error("cmd handler is null,请检查是否回调异常", CmdMgr.getCmd(cmdMerge), CmdMgr.getSubCmd(cmdMerge), funHash);
        }
        return handler;
    }

    //消息分发
    public static packageHandler(cmdMerge: number, data: ExternalMessage) {
        let handler = this.getHandler(cmdMerge, data.msgId);
        if (handler)
            handler(data);
    }
}
