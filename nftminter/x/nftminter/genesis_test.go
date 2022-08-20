package nftminter_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "nftminter/testutil/keeper"
	"nftminter/testutil/nullify"
	"nftminter/x/nftminter"
	"nftminter/x/nftminter/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftminterKeeper(t)
	nftminter.InitGenesis(ctx, *k, genesisState)
	got := nftminter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
