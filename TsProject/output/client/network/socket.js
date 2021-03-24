"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqSocket = exports.connectSocket = void 0;
const socketMgr_1 = require("./socketMgr");
const mapping_1 = require("../utils/mapping");
let hostname = "127.0.0.1";
let port = 10086;
function connectSocket(conn, error) {
    let socket = $.getInstance(socketMgr_1.SocketMgr);
    if (socket.isConnected) {
        conn(socket);
    }
    else {
        socket.onOpen(() => {
            conn(socket);
        });
        socket.onClosed((code, err) => {
            console.warn(`socket close: code=${code}, err=${err}`);
            if (error != null)
                error(code, err);
        });
        socket.onMessage((id, data) => {
            let packs = mapping_1.Mapping.getBinary(id);
            for (let { target, method } of packs) {
                try {
                    method.call(target, data);
                }
                catch (e) {
                    console.error(e);
                }
            }
        });
        socket.connect(hostname, port);
    }
}
exports.connectSocket = connectSocket;
function reqSocket(conn, error) {
    let socket = $.getInstance(socketMgr_1.SocketMgr);
    if (socket.isConnected) {
        conn(socket);
    }
}
exports.reqSocket = reqSocket;
//# sourceMappingURL=socket.js.map