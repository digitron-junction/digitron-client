package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"minter/x/minter/types"
)

func (k msgServer) CreateNft(goCtx context.Context, msg *types.MsgCreateNft) (*types.MsgCreateNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nft = types.Nft{
		Creator: msg.Creator,
		Owner:   msg.Owner,
		Image:    msg.Image,
		CreatedAt:    msg.CreatedAt,
	 }
   
	 id := k.AppendNft(ctx, post)
   
	 return &types.MsgCreateNftResponse{Id: id}, nil

	return &types.MsgCreateNftResponse{}, nil
}
