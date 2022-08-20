package minter_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "minter/testutil/keeper"
	"minter/testutil/nullify"
	"minter/x/minter"
	"minter/x/minter/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MinterKeeper(t)
	minter.InitGenesis(ctx, *k, genesisState)
	got := minter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
