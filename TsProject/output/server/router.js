"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = exports.start = void 0;
const CS = require("csharp");
const working_1 = require("./working");
const { IPEndPoint, IPAddress } = CS.System.Net;
const { Socket, TcpListener, SocketType, ProtocolType } = CS.System.Net.Sockets;
function removeAt(arr, index) {
    if (index >= 0 && index < arr.length) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
        return true;
    }
    return false;
}
let timeout;
let listener;
function stop() {
    try {
        if (timeout !== undefined) {
            clearInterval(timeout);
        }
        if (listener) {
            listener.Stop();
        }
    }
    catch (e) {
        console.warn(e);
    }
    listener = undefined;
    timeout = undefined;
}
exports.stop = stop;
function start(port) {
    stop();
    try {
        console.log("->启动: 服务器监听port = " + port);
        let ePoint = new IPEndPoint(IPAddress.Any, port);
        listener = new CS.System.Net.Sockets.TcpListener(ePoint);
        listener.Start();
        let sockets = new Array();
        timeout = setInterval(() => {
            if (listener.Pending()) {
                sockets.push(listener.AcceptSocket());
            }
            let buffer = CS.BufferUtil.Create(4096);
            for (let i = sockets.length - 1; i >= 0; i--) {
                if (!sockets[i].Connected) {
                    removeAt(sockets, i);
                    continue;
                }
                if (sockets[i].Available > 0) {
                    let size = buffer.Length;
                    let receBuffer;
                    while (size >= buffer.Length) {
                        size = sockets[i].Receive(buffer);
                        if (size > 0) {
                            let _buffer = CS.BufferUtil.Copy(buffer, 0, size);
                            receBuffer = receBuffer ? CS.BufferUtil.Connect(receBuffer, _buffer) : _buffer;
                        }
                    }
                    if (receBuffer) {
                        working_1.messageBuffer(sockets[i], receBuffer);
                    }
                }
            }
        }, 20);
    }
    catch (e) {
        console.warn(e);
        stop();
    }
}
exports.start = start;
globalListener.quit.add(() => {
    console.log("->状态: 服务器停止");
    stop();
});
//# sourceMappingURL=router.js.map