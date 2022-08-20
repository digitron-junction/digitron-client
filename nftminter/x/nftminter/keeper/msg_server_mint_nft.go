package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftminter/x/nftminter/types"
)

func (k msgServer) MintNft(goCtx context.Context, msg *types.MsgMintNft) (*types.MsgMintNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// _ = ctx
	// Create variable of type Nft
	var Nft = types.MintNft{
		creator: msg.creator,
		ownerAddress:   msg.ownerAddress,
		hashId:    msg.hashId,
		createdAt:    msg.createdAt,
	}
  
	// Add a Nft to the store and get back the ID
	id := k.AppendNft(ctx, Nft)
  
	// Return the ID of the Nft
	return &types.MsgCreateNftResponse{Id: id}, nil

	return &types.MsgMintNftResponse{}, nil
}
