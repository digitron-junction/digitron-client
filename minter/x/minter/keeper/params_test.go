package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "minter/testutil/keeper"
	"minter/x/minter/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MinterKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
