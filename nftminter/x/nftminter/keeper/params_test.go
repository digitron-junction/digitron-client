package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "nftminter/testutil/keeper"
	"nftminter/x/nftminter/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NftminterKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
