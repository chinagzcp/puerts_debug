"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = exports.messageString = exports.messageBuffer = void 0;
const CS = require("csharp");
const puerts_1 = require("puerts");
const mapping_1 = require("./utils/mapping");
const BUF_LEN = "__BUF_LENGTH", BUF_CACHE = "__BUF_CACHE";
const LEN_SIZE = 2, LEN_MAX = 0xffff;
const LEN_EX_SIZE = 4, LEN_EX_MAX = 0xffffffff;
const ID_SIZE = 4;
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
function messageBuffer(socket, data) {
    let bufCache = socket[BUF_CACHE];
    if (bufCache) {
        socket[BUF_CACHE] = undefined;
        data = CS.BufferUtil.Connect(bufCache, data);
    }
    let len = data.Length;
    let bufLen = socket[BUF_LEN] ?? 0;
    if (len < LEN_SIZE || bufLen > len) {
        socket[BUF_CACHE] = data;
        return;
    }
    let stream = new CS.MemoryStream(data);
    bufLen = stream.ReadUInt16();
    if (bufLen >= LEN_MAX && len >= LEN_SIZE + LEN_EX_SIZE) {
        bufLen = stream.ReadUInt32();
    }
    if (bufLen > len) {
        socket[BUF_LEN] = bufLen;
        socket[BUF_CACHE] = data;
        return;
    }
    socket[BUF_LEN] = undefined;
    socket[BUF_CACHE] = undefined;
    let id = stream.ReadInt32();
    let blob = stream.ReadBlob();
    let bolbData = BytesToUint8Array(blob);
    let packs = mapping_1.Mapping.getBinary(id);
    for (let { target, method } of packs) {
        try {
            method.call(target, socket, bolbData);
        }
        catch (e) {
            console.error(e);
            break;
        }
    }
    if (!stream.ReadEOF()) {
        messageBuffer(socket, stream.ReadAll());
    }
}
exports.messageBuffer = messageBuffer;
function messageString(socket, data) {
    socket.Send("server get:" + data);
}
exports.messageString = messageString;
function send(socket, id, data) {
    if (data instanceof Uint8Array || !(data instanceof CS.System.Object)) {
        data = Uint8ArrayToBytes(data);
    }
    let total = LEN_SIZE + ID_SIZE + data.Length;
    let stream = new CS.MemoryStream(total + LEN_EX_SIZE);
    if (total < LEN_MAX) {
        stream.WriteUInt16(total);
    }
    else {
        stream.WriteUInt16(LEN_MAX);
        stream.WriteUInt32(total + LEN_EX_SIZE);
    }
    stream.WriteInt32(id);
    stream.WriteBlob(data);
    socket.Send(stream.GetBuffer());
}
exports.send = send;
//# sourceMappingURL=working.js.map