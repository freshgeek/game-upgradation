import { _decorator, Component, director, Node } from 'cc';
import RequestCommand from '../iogame/RequestCommand';
import SocketClient from '../iogame/SocketClient';
const { ccclass, property } = _decorator;

@ccclass('persist')
export class persist extends Component {
    protected onLoad(): void {
        SocketClient.ins.connect();
        RequestCommand.init(SocketClient.ins);

        director.addPersistRootNode(this.node);


    }
    start() {

    }

    update(deltaTime: number) {

    }
}

