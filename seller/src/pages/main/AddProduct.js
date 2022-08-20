import { useState, useEffect } from 'react';
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
    ListItemText
} from '@mui/material';
import { PersonalDetailsForm, AddressDetailsForm, ArtistDetailsForm } from 'src/components';

import { ReactComponent as InstagramIcon } from 'src/assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/icons/facebook.svg';
import { ReactComponent as PinterestIcon } from 'src/assets/icons/pinterest.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter.svg';

function Profile() {
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
                        <Grid item xs={12} md={3}>
                            <Stack alignItems="center" gap={2}>
                                <Hidden mdDown>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                {' '}
                                                <InstagramIcon width={70} height={70} />{' '}
                                            </ListItemIcon>
                                            <ListItemText> Instagram ID </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {' '}
                                                <FacebookIcon width={70} height={70} />{' '}
                                            </ListItemIcon>
                                            <ListItemText> Facebook ID </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {' '}
                                                <PinterestIcon width={70} height={70} />{' '}
                                            </ListItemIcon>
                                            <ListItemText> Pinterest ID </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {' '}
                                                <TwitterIcon width={70} height={70} />{' '}
                                            </ListItemIcon>
                                            <ListItemText> Twitter ID </ListItemText>
                                        </ListItem>
                                    </List>
                                </Hidden>
                                <Hidden mdUp>
                                    <Stack direction="row" gap={3}>
                                        <InstagramIcon width={70} height={70} />
                                        <FacebookIcon width={70} height={70} />
                                        <PinterestIcon width={70} height={70} />
                                        <TwitterIcon width={70} height={70} />
                                    </Stack>
                                </Hidden>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Stack direction="column" gap={5}>
                                <PersonalDetailsForm />
                                <ArtistDetailsForm />
                                <AddressDetailsForm />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box pb={40}></Box>
                </Container>
            </Card>
        </>
    );
}

export default Profile;
