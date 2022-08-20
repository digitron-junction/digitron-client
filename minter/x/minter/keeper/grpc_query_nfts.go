package keeper

import (
	"context"

    "minter/x/minter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Nfts(goCtx context.Context,  req *types.QueryNftsRequest) (*types.QueryNftsResponse, error) {
	if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO: Process the query
    _ = ctx

	return &types.QueryNftsResponse{}, nil
}
