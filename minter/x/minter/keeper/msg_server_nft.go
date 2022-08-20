package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"minter/x/minter/types"
)

func (k msgServer) Nft(goCtx context.Context, msg *types.MsgNft) (*types.MsgNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgNftResponse{}, nil
}
