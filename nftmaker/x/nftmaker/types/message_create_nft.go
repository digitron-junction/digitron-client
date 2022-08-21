package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateNft = "create_nft"

var _ sdk.Msg = &MsgCreateNft{}

func NewMsgCreateNft(creator string, owner string, image string, createdAt string) *MsgCreateNft {
	return &MsgCreateNft{
		Creator:   creator,
		Owner:     owner,
		Image:     image,
		CreatedAt: createdAt,
	}
}

func (msg *MsgCreateNft) Route() string {
	return RouterKey
}

func (msg *MsgCreateNft) Type() string {
	return TypeMsgCreateNft
}

func (msg *MsgCreateNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
