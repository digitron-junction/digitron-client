package keeper

import (
	"nftmaker/x/nftmaker/types"
)

var _ types.QueryServer = Keeper{}
