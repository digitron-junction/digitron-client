package keeper

import (
	"minter/x/minter/types"
)

var _ types.QueryServer = Keeper{}
