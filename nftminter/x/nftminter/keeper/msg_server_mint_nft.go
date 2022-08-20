package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftminter/x/nftminter/types"
)

func (k msgServer) MintNft(goCtx context.Context, msg *types.MsgMintNft) (*types.MsgMintNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMintNftResponse{}, nil
}
