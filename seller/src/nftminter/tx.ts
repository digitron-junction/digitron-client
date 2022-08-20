/* eslint-disable */
// @ts-ignore
import { Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = 'nftminter.nftminter';

export interface Nft {
    creator: Uint8Array;
    sender: Uint8Array;
    reciever: Uint8Array;
}

const baseNft: object = {};

export const Nft = {
    encode(message: Nft, writer: Writer = Writer.create()): Writer {
        if (message.creator.length !== 0) {
            writer.uint32(10).bytes(message.creator);
        }
        if (message.sender.length !== 0) {
            writer.uint32(18).bytes(message.sender);
        }
        if (message.reciever.length !== 0) {
            writer.uint32(26).bytes(message.reciever);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Nft {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNft } as Nft;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.bytes();
                    break;
                case 2:
                    message.sender = reader.bytes();
                    break;
                case 3:
                    message.reciever = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Nft {
        const message = { ...baseNft } as Nft;
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = bytesFromBase64(object.creator);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.reciever !== undefined && object.reciever !== null) {
            message.reciever = bytesFromBase64(object.reciever);
        }
        return message;
    },

    toJSON(message: Nft): unknown {
        const obj: any = {};
        message.creator !== undefined &&
            (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.reciever !== undefined &&
            (obj.reciever = base64FromBytes(message.reciever !== undefined ? message.reciever : new Uint8Array()));
        return obj;
    },

    fromPartial(object: DeepPartial<Nft>): Nft {
        const message = { ...baseNft } as Nft;
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        } else {
            message.creator = new Uint8Array();
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = new Uint8Array();
        }
        if (object.reciever !== undefined && object.reciever !== null) {
            message.reciever = object.reciever;
        } else {
            message.reciever = new Uint8Array();
        }
        return message;
    }
};

/** Msg defines the Msg service. */
export interface Msg {}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;
