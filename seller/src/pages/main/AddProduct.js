import { useState, useRef } from 'react';
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
import { Text as TextInput, Select as SelectInput } from 'src/components';


import { ReactComponent as InstagramIcon } from 'src/assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/icons/facebook.svg';
import { ReactComponent as PinterestIcon } from 'src/assets/icons/pinterest.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter.svg';

function Profile() {
    const profileData = {
        img: 'https://images.yourstory.com/cs/wordpress/2013/06/Women1.jpg'
    };

    const formValues = useRef({});

    const handleChange = (key, value) => {
        formValues.current[key] = value;
        console.log(formValues.current);
        onFormValuesChange(formValues.current);
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
                                <Grid container rowSpacing={4} columnSpacing={3}>
                                    <Grid item xs={6}>
                                        <TextInput label="Name" onChange={(val) => handleChange('prodName', val)} color={"red"} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Price" onChange={(val) => handleChange('lastName', val)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Email" onChange={(val) => handleChange('email', val)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Date of birth" onChange={(val) => handleChange('dateOfBirth', val)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Phone Number" onChange={(val) => handleChange('phoneNumber', val)} />
                                    </Grid>
                                </Grid>
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
