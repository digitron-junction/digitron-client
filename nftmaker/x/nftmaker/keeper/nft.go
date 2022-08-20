package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"nftmaker/x/nftmaker/types"
)

// func (k Keeper) AppendPost() uint64 {
//   count := k.GetPostCount()
//   store.Set()
//   k.SetPostCount()
//   return count
// }

func (k Keeper) GetNftCount(ctx sdk.Context) uint64 {
	// Get the store using storeKey (which is "blog") and NftCountKey (which is "Nft-count-")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NftCountKey))

	// Convert the NftCountKey to bytes
	byteKey := []byte(types.NftCountKey)

	// Get the value of the count
	bz := store.Get(byteKey)

	// Return zero if the count value is not found (for example, it's the first Nft)
	if bz == nil {
		return 0
	}

	// Convert the count into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetNftCount(ctx sdk.Context, count uint64) {
	// Get the store using storeKey (which is "blog") and NftCountKey (which is "Nft-count-")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NftCountKey))

	// Convert the NftCountKey to bytes
	byteKey := []byte(types.NftCountKey)

	// Convert count from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	// Set the value of Nft-count- to count
	store.Set(byteKey, bz)
}

func (k Keeper) AppendNft(ctx sdk.Context, nft types.Nft) uint64 {
	// Get the current number of posts in the store
	count := k.GetNftCount(ctx)

	// Assign an ID to the post based on the number of posts in the store
	nft.Id = count

	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NftKey))

	// Convert the post ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, nft.Id)

	// Marshal the nft into bytes
	appendedValue := k.cdc.MustMarshal(&nft)

	// Insert the nft bytes using nft ID as a key
	store.Set(byteKey, appendedValue)

	// Update the nft count
	k.SetNftCount(ctx, count+1)
	return count
}
