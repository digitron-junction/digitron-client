package types

const (
	// ModuleName defines the module name
	ModuleName = "nftmaker"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nftmaker"

	// Keep track of the index of nfts
	NftKey      = "Nft-value-"
	NftCountKey = "Nft-count-"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
