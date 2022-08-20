package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftmaker/x/nftmaker/types"
)

func (k msgServer) CreateNft(goCtx context.Context, msg *types.MsgCreateNft) (*types.MsgCreateNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Create variable of type Post
	var nft = types.Nft{
		Creator:   msg.Creator,
		Owner:     msg.Owner,
		Image:     msg.Image,
		CreatedAt: msg.CreatedAt,
	}

	// Add a post to the store and get back the ID
	id := k.AppendNft(ctx, nft)

	// Return the ID of the post
	return &types.MsgCreateNftResponse{Id: id}, nil
}
