package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"minter/x/minter/types"
)

var _ = strconv.Itoa(0)

func CmdNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "nft [owner] [image] [created-at]",
		Short: "Broadcast message nft",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argImage := args[1]
			argCreatedAt := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgNft(
				clientCtx.GetFromAddress().String(),
				argOwner,
				argImage,
				argCreatedAt,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
