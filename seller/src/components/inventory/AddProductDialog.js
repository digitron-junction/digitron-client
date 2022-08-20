import { useState, useEffect } from 'react';
import { Close, AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';
import {
    Typography,
    Button,
    Avatar,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Stack,
    Box,
    IconButton
} from '@mui/material';
import { Text as TextInput, Select as SelectInput, SuspenseLoader } from 'src/components';
import { ReactComponent as Success } from 'src/assets/minting_success.svg';
import { providers, Contract } from 'ethers';
import NFTMinter from '../../artifacts/contracts/NFTMinter.sol/NFTMinter.json';
import { pinFileToIPFS } from 'src/utils/pinToIpfs';
import generateUUID from 'src/utils/generateUUID';
import contractAddress from 'src/constants/contractAddress';

const provider = new providers.Web3Provider(window.ethereum);
// get the end user
const signer = provider.getSigner();
// get the smart contract
const contract = new Contract(contractAddress, NFTMinter.abi, signer);

export default function AddProductDialog(props) {
    const [selectedImage, setSelectedImage] = useState();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productMRP, setProductMRP] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productTags, setProductTags] = useState('');
    const [ipfsHash, setIpfsHash] = useState('');
    const [contarctId, setContarctId] = useState('');
    const [minterWalletAddress, setMinterWalletAddress] = useState('');
    const [postId, setPostId] = useState('');
    const [qty, setQty] = useState('');
    const [isMinted, setIsMinted] = useState(false);

    const isAuthenticated = window.ethereum;

    if (!isAuthenticated)
        return (
            <Dialog
                open={props.open}
                onClose={() => {
                    if (!loading) props.onClose();
                }}
            >
                <DialogTitle>Install Metamask</DialogTitle>
            </Dialog>
        );

    const upload = async () => {
        setLoading(true);
        // console.log('Started timing out');
        // setTimeout(() => {
        // 	console.log('Timed out');
        // 	// setLoading(false)
        // 	setIsMinted(true);
        // }, 2000);
        // return;
        try {
            const id = generateUUID();
            const pinataResponse = await pinFileToIPFS(selectedImage, name, id);
            if (window.ethereum) {
                await window.ethereum.enable();
                mintNFT(pinataResponse.data.IpfsHash, name, id);
                setIpfsHash(pinataResponse.data.IpfsHash);
                // mintNFT('QmZ4FMii4BJszN4vfYoRkupGK6vjzjN7MvSFsBqSnwdBaV', name, id);
                // setIpfsHash('QmZ4FMii4BJszN4vfYoRkupGK6vjzjN7MvSFsBqSnwdBaV');
            }
        } catch (err) {
            console.error(err);
            alert('An error occured!');
            setLoading(false);
        }
    };

    const mintNFT = async (metaDataUri) => {
        // make a connection between contract and signer
        const connection = contract.connect(signer);
        // get wallet address of recipient
        const walletAddress = connection.address;
        setMinterWalletAddress(walletAddress);

        // call the pay to mint method on the smart contract
        const result = await contract.mintNFT(walletAddress, metaDataUri);

        console.log(result);

        // wait for result to be mined
        await result.wait();

        const tokenId = await contract.getCurrentTokenIdCounter();

        console.log(tokenId._hex.toString());

        // OnSubmitFormHandler(tokenId._hex.toString());
        // setLoading(false);
        setIsMinted(true);
    };

    const OnSubmitFormHandler = (tokenId) => {
        const headers = {
            'Content-Type': 'text/plain',
            Authorization: 'Token 4dec877a00e9131a5862c5d91e94b9f87962324d'
        };
        const body = {
            name: name,
            category: productCategory,
            discountPrice: productPrice,
            sellingPrice: productMRP,
            tags: productTags,
            image: selectedImage,
            ipfsId: ipfsHash,
            minterWalletAddress: minterWalletAddress,
            contractTokenId: tokenId
        };

        axios
            .post('http://localhost:8000/create-nft-product', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPostId(data.id);

                setLoading(false);
                props.onClose();
            })
            .catch((err) => console.log(err));
    };

    return (
        <Dialog
            open={props.open}
            onClose={() => {
                if (!loading) props.onClose();
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <DialogTitle>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography ml={3} variant="h3">
                            {' '}
                            Add Product{' '}
                        </Typography>
                        <IconButton onClick={props.onClose}>
                            <Close />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{ position: 'relative' }}>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sm={5}
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Avatar
                                variant="rounded"
                                src={selectedImage ? URL.createObjectURL(selectedImage) : '/static/images/Image.png'}
                                sx={{
                                    width: '80%',
                                    height: '80%',
                                    borderRadius: 5,
                                    filter: 'brightness(0.6)'
                                }}
                            />
                            <Box
                                sx={{
                                    color: 'white',
                                    position: 'absolute',
                                    left: '38%',
                                    top: '42%'
                                }}
                            >
                                {/* upload button */}
                                <Button variant="text" component="label">
                                    <AddCircleOutline sx={{ color: 'white', fontSize: 50 }} />
                                    <input
                                        onChange={(e) =>
                                            setSelectedImage(e.target.files ? e.target.files[0] : undefined)
                                        }
                                        accept="image/*"
                                        type="file"
                                        hidden
                                    />
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Grid container spacing={2} mt={0.5}>
                                <Grid item xs={12}>
                                    <TextInput label="Name" onChange={(value) => setName(value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Quantity" onChange={(value) => setQty(value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <SelectInput
                                        label="Category"
                                        options={['Silk', 'Woollen']}
                                        onChange={(value) => setProductCategory(value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Selling Price" onChange={(value) => setProductPrice(value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Discount Price" onChange={(value) => setProductMRP(value)} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput label="Description" onChange={(value) => setProductTags(value)} />
                            {/* img name */}
                            <Typography sx={{ wordBreak: 'break-word' }} ml={2}>
                                {selectedImage ? selectedImage.name : 'No Image Selected'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="space-evenly">
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '30%',
                                        p: 1.5,
                                        background: 'linear-gradient(90deg, #3E97FF 1.49%, #9DC9FC 100%)',
                                        color: 'white',
                                        fontWeight: 400
                                    }}
                                >
                                    {' '}
                                    Save{' '}
                                </Button>

                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '30%',
                                        p: 1.5,
                                        background: 'linear-gradient(269.95deg, #FFD422 0.02%, #FF7D05 97.45%)',
                                        // 'linear-gradient(90deg, #3E97FF 1.49%, #9DC9FC 100%)',
                                        color: 'white',
                                        fontWeight: 400
                                    }}
                                    onClick={upload}
                                >
                                    {' '}
                                    Generate NFT{' '}
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </DialogContent>

                {/* Loader */}
                {loading && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 100000
                        }}
                    >
                        {!isMinted ? <SuspenseLoader /> : <Success />}
                    </Box>
                )}
            </Box>
        </Dialog>
    );
}
