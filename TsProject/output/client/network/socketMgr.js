"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketMgr = void 0;
const CS = require("csharp");
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
function Uint8ArrayToBytes(datas) {
    let result = CS.System.Array.CreateInstance(puerts_1.$typeof(CS.System.Byte), datas.length);
    for (let i = 0; i < result.Length; i++) {
        result.set_Item(i, datas[i]);
    }
    return result;
}
function BytesToUint8Array(datas) {
    let result = new Array();
    for (let i = 0; i < datas.Length; i++) {
        result.push(datas.get_Item(i));
    }
    return Uint8Array.from(result);
}
const LEN_SIZE = 2, LEN_MAX = 0xffff;
const LEN_EX_SIZE = 4, LEN_EX_MAX = 0xffffffff;
const ID_SIZE = 4;
class SocketMgr {
    constructor() {
        this._socket = new csharp_1.TcpSocket();
        this._socket.add_onOpen(() => {
            this._onOpen();
        });
        this._socket.add_onClosed((code, msg) => {
            this._onClosed(code, msg);
        });
        this._socket.add_onError((msg) => {
            this._onError?.call(undefined, msg);
        });
        this._socket.add_onMessage((data) => this.receiveBinary(data));
        globalListener.quit.add(() => {
            this._socket.Close();
            this._socket.Dispose();
            console.log("->释放: socket连接");
        });
    }
    get isConnected() { return this._socket && this._socket.connected; }
    onOpen(cb) { this._onOpen = cb; }
    onClosed(cb) { this._onClosed = cb; }
    onError(cb) { this._onError = cb; }
    onMessage(cb) { this._onMessage = cb; }
    receiveBinary(data) {
        let buffer = this._buffer;
        if (buffer && buffer.Length > 0) {
            let newdata = CS.System.Array.CreateInstance(puerts_1.$typeof(CS.System.Byte), buffer.Length + data.Length);
            CS.System.Array.Copy(buffer, 0, newdata, 0, buffer.Length);
            CS.System.Array.Copy(data, 0, newdata, buffer.Length, data.Length);
            data = newdata;
        }
        let len = data.Length;
        let bufLen = this._bufferLength ?? 0;
        if (len < LEN_SIZE || bufLen > len) {
            this._buffer = data;
            return;
        }
        let stream = new CS.MemoryStream(data);
        bufLen = stream.ReadUInt16();
        if (bufLen >= LEN_MAX && len >= LEN_SIZE + LEN_EX_SIZE) {
            bufLen = stream.ReadUInt32();
        }
        if (bufLen > len) {
            this._buffer = data;
            this._bufferLength = bufLen;
            return;
        }
        this._buffer = undefined;
        this._bufferLength = 0;
        let id = stream.ReadInt32();
        let blob = stream.ReadBlob();
        let bolbData = BytesToUint8Array(blob);
        this._onMessage?.call(undefined, id, bolbData);
        if (!stream.ReadEOF()) {
            this.receiveBinary(stream.ReadAll());
        }
    }
    sendString(data) {
        this._socket.Send(data);
    }
    sendBinary(data) {
        if (data instanceof Uint8Array) {
            data = Uint8ArrayToBytes(data);
        }
        this._socket.Send(data);
    }
    send(id, data) {
        if (data instanceof Uint8Array || !(data instanceof CS.System.Object)) {
            data = Uint8ArrayToBytes(data);
        }
        let total = LEN_SIZE + ID_SIZE + data.Length;
        let stream = new csharp_1.MemoryStream();
        if (total < LEN_MAX) {
            stream.WriteUInt16(total);
        }
        else {
            stream.WriteUInt16(LEN_MAX);
            stream.WriteUInt32(total + LEN_EX_SIZE);
        }
        stream.WriteInt32(id);
        stream.WriteBlob(data);
        this._socket.Send(stream.GetBuffer());
    }
    connect(hostname, port) {
        this._socket.Connect(hostname, port);
    }
    close() {
        this._socket.Close();
    }
}
exports.SocketMgr = SocketMgr;
//# sourceMappingURL=socketMgr.js.map