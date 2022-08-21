/* eslint-disable */

import { Reader, util, configure, Writer } from "protobufjs/minimal";
//@ts-ignore
import * as Long from "long";

export const protobufPackage = "nftmaker.nftmaker";

export interface MsgCreateNft {
  creator: string;
  owner: string;
  image: string;
  createdAt: string;
}

export interface MsgCreateNftResponse {
  id: number;
}

const baseMsgCreateNft: object = {
  creator: "",
  owner: "",
  image: "",
  createdAt: "",
};

export const MsgCreateNft = {
  encode(message: MsgCreateNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNft } as MsgCreateNft;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        case 4:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNft {
    const message = { ...baseMsgCreateNft } as MsgCreateNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNft): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.image !== undefined && (obj.image = message.image);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNft>): MsgCreateNft {
    const message = { ...baseMsgCreateNft } as MsgCreateNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    return message;
  },
};

const baseMsgCreateNftResponse: object = { id: 0 };

export const MsgCreateNftResponse = {
  encode(
    message: MsgCreateNftResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNftResponse {
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateNftResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNftResponse>): MsgCreateNftResponse {
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse> {
    const data = MsgCreateNft.encode(request).finish();
    const promise = this.rpc.request(
      "nftmaker.nftmaker.Msg",
      "CreateNft",
      data
    );
    return promise.then((data) =>
      MsgCreateNftResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
