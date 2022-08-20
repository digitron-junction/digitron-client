package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgNft = "nft"

var _ sdk.Msg = &MsgNft{}

func NewMsgNft(creator string, owner string, image string, createdAt string) *MsgNft {
	return &MsgNft{
		Creator:   creator,
		Owner:     owner,
		Image:     image,
		CreatedAt: createdAt,
	}
}

func (msg *MsgNft) Route() string {
	return RouterKey
}

func (msg *MsgNft) Type() string {
	return TypeMsgNft
}

func (msg *MsgNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
