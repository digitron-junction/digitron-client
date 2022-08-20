package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"nftminter/x/nftminter/types"
)

var _ = strconv.Itoa(0)

func CmdMintNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-nft [owner-address] [hash-id] [created-at]",
		Short: "Broadcast message MintNft",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwnerAddress := args[0]
			argHashId := args[1]
			argCreatedAt := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMintNft(
				clientCtx.GetFromAddress().String(),
				argOwnerAddress,
				argHashId,
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
