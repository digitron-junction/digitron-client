package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"minter/x/minter/keeper"
	"minter/x/minter/types"
)

func SimulateMsgNft(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgNft{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Nft simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Nft simulation not implemented"), nil, nil
	}
}
