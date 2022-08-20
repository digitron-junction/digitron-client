package keeper

import (
  "encoding/binary"

  "github.com/cosmos/cosmos-sdk/store/prefix"
  sdk "github.com/cosmos/cosmos-sdk/types"

  "nftminter/x/nftminter/types"
)

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

  func (k Keeper) AppendNft(ctx sdk.Context, Nft types.Nft) uint64 {
	// Get the current number of Nfts in the store
	count := k.GetNftCount(ctx)
  
	// Assign an ID to the Nft based on the number of Nfts in the store
	Nft.Id = count
  
	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NftKey))
  
	// Convert the Nft ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, Nft.Id)
  
	// Marshal the Nft into bytes
	appendedValue := k.cdc.MustMarshal(&Nft)
  
	// Insert the Nft bytes using Nft ID as a key
	store.Set(byteKey, appendedValue)
  
	// Update the Nft count
	k.SetNftCount(ctx, count+1)
	return count
  }