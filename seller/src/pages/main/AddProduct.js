import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import {
    Hidden,
    Typography,
    Stack,
    SvgIcon,
    Box,
    TextField,
    MenuItem,
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@mui/material';
import { PersonalDetailsForm, AddressDetailsForm, ArtistDetailsForm } from 'src/components';

import { ReactComponent as InstagramIcon } from 'src/assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/icons/facebook.svg';
import { ReactComponent as PinterestIcon } from 'src/assets/icons/pinterest.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter.svg';
import { AddCircleOutline } from '@mui/icons-material';
import SelectInput from '@mui/material/Select/SelectInput';
import TextInput from 'src/components/misc/Text';

function Profile() {
    const [selectedImage, setSelectedImage] = useState();

    const formValues = useRef({});

    const handleChange = (key, value) => {
        formValues.current[key] = value;
        console.log(formValues.current);
        onFormValuesChange(formValues.current);
    };

    const profileData = {
        img: 'https://images.yourstory.com/cs/wordpress/2013/06/Women1.jpg'
    };

    useEffect(() => {
        (async () => {
            if (!window.keplr) {
                alert('Please install keplr extension');
            } else {
                const chainId = 'cosmoshub-4';

                // Enabling before using the Keplr is recommended.
                // This method will ask the user whether to allow access if they haven't visited this website.
                // Also, it will request that the user unlock the wallet if the wallet is locked.
                await window.keplr.enable(chainId);

                const offlineSigner = window.keplr.getOfflineSigner(chainId);

                // You can get the address/public keys by `getAccounts` method.
                // It can return the array of address/public key.
                // But, currently, Keplr extension manages only one address/public key pair.
                // XXX: This line is needed to set the sender address for SigningCosmosClient.
                const accounts = await offlineSigner.getAccounts();

                // Initialize the gaia api with the offline signer that is injected by Keplr extension.
                const cosmJS = new SigningCosmosClient(
                    'https://lcd-cosmoshub.keplr.app',
                    accounts[0].address,
                    offlineSigner
                );
            }
        })();

        return () => { };
    }, []);

    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <Card>
                <Container maxWidth={'lg'} sx={{ p: 5 }}>
                    <Grid container direction="row" spacing={4}>
                        <Grid
                            item
                            xs={12} md={3}
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
                        <Grid item xs={12} md={9}>
                            <Grid container rowSpacing={4} columnSpacing={3}>
                                <Grid item xs={12}>
                                    <TextInput label="Product Name" onChange={(val) => handleChange('name', val)} color="warning" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Categorey" onChange={(val) => handleChange('categorey', val)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Sub Categorey" onChange={(val) => handleChange('subCategorey', val)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput label="Product Description" onChange={(val) => handleChange('descriprion', val)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Original Price" onChange={(val) => handleChange('originalPrice', val)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Selling Price" onChange={(val) => handleChange('price', val)} />
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '30%',
                                    p: 1.5,
                                    mt: 3,
                                    // alignItems: 'center',
                                    background: 'linear-gradient(269.95deg, #FFD422 0.02%, #FF7D05 97.45%)',
                                    // 'linear-gradient(90deg, #3E97FF 1.49%, #9DC9FC 100%)',
                                    color: 'white',
                                    fontWeight: 400
                                }}
                                // onClick={uploa   d}
                            >
                                {' '}
                                Generate NFT{' '}
                            </Button>
                        </Grid>
                    </Grid>
                    <Box pb={40}></Box>
                </Container>
            </Card>
        </>
    );
}

export default Profile;
