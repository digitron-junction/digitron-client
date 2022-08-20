/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "nftminter.nftminter";

export interface MsgMintNft {
  creator: string;
  ownerAddress: string;
  hashId: string;
  createdAt: string;
}

export interface MsgMintNftResponse {}

const baseMsgMintNft: object = {
  creator: "",
  ownerAddress: "",
  hashId: "",
  createdAt: "",
};

export const MsgMintNft = {
  encode(message: MsgMintNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.hashId !== "") {
      writer.uint32(26).string(message.hashId);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNft } as MsgMintNft;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.hashId = reader.string();
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

  fromJSON(object: any): MsgMintNft {
    const message = { ...baseMsgMintNft } as MsgMintNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.hashId !== undefined && object.hashId !== null) {
      message.hashId = String(object.hashId);
    } else {
      message.hashId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    return message;
  },

  toJSON(message: MsgMintNft): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.hashId !== undefined && (obj.hashId = message.hashId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNft>): MsgMintNft {
    const message = { ...baseMsgMintNft } as MsgMintNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.hashId !== undefined && object.hashId !== null) {
      message.hashId = object.hashId;
    } else {
      message.hashId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    return message;
  },
};

const baseMsgMintNftResponse: object = {};

export const MsgMintNftResponse = {
  encode(_: MsgMintNftResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNftResponse } as MsgMintNftResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintNftResponse {
    const message = { ...baseMsgMintNftResponse } as MsgMintNftResponse;
    return message;
  },

  toJSON(_: MsgMintNftResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintNftResponse>): MsgMintNftResponse {
    const message = { ...baseMsgMintNftResponse } as MsgMintNftResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MintNft(request: MsgMintNft): Promise<MsgMintNftResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MintNft(request: MsgMintNft): Promise<MsgMintNftResponse> {
    const data = MsgMintNft.encode(request).finish();
    const promise = this.rpc.request(
      "nftminter.nftminter.Msg",
      "MintNft",
      data
    );
    return promise.then((data) => MsgMintNftResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
