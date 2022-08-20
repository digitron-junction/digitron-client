package keeper

import (
	"nftminter/x/nftminter/types"
)

var _ types.QueryServer = Keeper{}
