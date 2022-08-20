import { List } from '@mui/material';
import { Contract, providers } from 'ethers';

import { SectionCard, OrderListItem } from 'src/components';
import contractAddress from 'src/constants/contractAddress';

import NFTMinter from '../../artifacts/contracts/NFTMinter.sol/NFTMinter.json';

const provider = new providers.Web3Provider(window.ethereum);
// get the end user
const signer = provider.getSigner();
// get the smart contract
const contract = new Contract(contractAddress, NFTMinter.abi, signer);

const products = [
    {
        name: 'Good Product',
        desc: 'Very good product with NFT',
        img: '/static/images/Image.png',
        rating: 3,
        price: '50',
        discountedPrice: 25,
        mintedNFT: true
    },
    {
        name: 'A very Good Product',
        desc: 'Very good product without NFT',
        img: '/static/images/Image.png',
        rating: 5,
        price: '50',
        discountedPrice: 30,
        mintedNFT: false
    }
];

export default function OrdersListItem() {
    const transferNFT = async () => {
        // make a connection between contract and signer
        const connection = contract.connect(signer);
        // get wallet address of recipient
        const walletAddress = connection.address;

        // wallet address to which NFT has to be transfered
        const buyerWalletAddress = '0xCB25b642B026E798597D71Cf94dDD1dE8926EBAF';

        const contractTokenId = 0;

        // safeTransferFrom(address from, address to, uint256 tokenId)
        const result = await contract.tranfer(walletAddress, buyerWalletAddress, contractTokenId);

        console.log(result);
    };

    return (
        <SectionCard title="Your Orders">
            <List disablePadding>
                {products.map((product, index) => (
                    <OrderListItem
                        key={index}
                        name={product.name}
                        photo={product.img}
                        rating={product.rating}
                        desc={product.desc}
                        price={product.price}
                        mintedNFT={product.mintedNFT}
                        onAccept={() => {}}
                        onTransferNFT={transferNFT}
                        onDecline={() => {}}
                    />
                ))}
            </List>
        </SectionCard>
    );
}
