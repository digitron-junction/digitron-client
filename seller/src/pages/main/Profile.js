import { useState } from 'react';
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
                                <Avatar src={profileData.img} sx={{ width: 200, height: 200 }} />
                                <Typography variant="h4">Your Avatar</Typography>
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
