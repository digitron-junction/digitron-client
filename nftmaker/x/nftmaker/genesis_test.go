package nftmaker_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "nftmaker/testutil/keeper"
	"nftmaker/testutil/nullify"
	"nftmaker/x/nftmaker"
	"nftmaker/x/nftmaker/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftmakerKeeper(t)
	nftmaker.InitGenesis(ctx, *k, genesisState)
	got := nftmaker.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
