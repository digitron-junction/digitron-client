package ignite_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "ignite/testutil/keeper"
	"ignite/testutil/nullify"
	"ignite/x/ignite"
	"ignite/x/ignite/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.IgniteKeeper(t)
	ignite.InitGenesis(ctx, *k, genesisState)
	got := ignite.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
