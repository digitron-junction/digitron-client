package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "ignite/testutil/keeper"
	"ignite/x/nft/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NftKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
