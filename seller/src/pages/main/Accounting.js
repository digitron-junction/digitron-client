import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { List, Container, Grid, Card, CardHeader, CardContent, Divider, Typography, Box, ListItemAvatar, Avatar, Button, Rating } from '@mui/material';
import { ProductListItem, SectionCard, FAQ, Wallet, OrderListItem } from 'src/components';
import { Star } from '@mui/icons-material';

const products = [
    {
        name: 'Good Product',
        desc: 'Very good product with NFT',
        img: '/static/images/Image.png',
        rating: 3,
        price: 50,
        discountedPrice: 25,
        mintedNFT: true
    },
    {
        name: 'A very Good Product',
        desc: 'Very good product without NFT',
        img: '/static/images/Image.png',
        rating: 5,
        price: 50,
        discountedPrice: 30,
        mintedNFT: false
    }
];

export default function Accounting() {
    return (
        <>
            <Helmet>
                <title>My Orders</title>
            </Helmet>
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 7 }}>
                    <Grid item xs={12} md={8} xl={9}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <SectionCard title="My Orders">
                                    {/* <OrderListItem /> */}
                                    <List>
                                        {products.map((pro, index) => (
                                            <>
                                                <ListItemAvatar>
                                                    <Avatar src={pro.img} variant="rounded" sx={{ width: 150, height: 150 }} />
                                                </ListItemAvatar>
                                                <Grid container spacing={2} sx={{ ml: 1 }}>
                                                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                        <Typography variant="h4">{pro.name}</Typography>
                                                        <Typography variant="body1">{pro.desc}</Typography>
                                                        <Rating
                                                            value={pro.rating}
                                                            precision={0.5}
                                                            readOnly
                                                            icon={<Star color="primary" sx={{ fontSize: 32 }} />}
                                                            emptyIcon={<Star sx={{ color: '#C4C4C4', fontSize: 32 }} />}
                                                        />
                                                        <Typography variant="h5">{pro.price}</Typography>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        md={6}
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-end',
                                                            justifyContent: 'flex-end'
                                                        }}
                                                    >
                                                        {/* {pro.mintedNFT ? (
                                                            <Button onClick={props.onAccept}>Accept</Button>
                                                        ) : (
                                                            <Button onClick={props.onTransferNFT}>Transfer NFT</Button>
                                                        )} */}
                                                        <Button> Decline </Button>
                                                    </Grid>
                                                </Grid></>
                                        ))}
                                    </List>
                                </SectionCard>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} xl={3}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <Wallet />
                            </Grid>
                            <Grid item xs={12}>
                                <FAQ />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box pb={50}></Box>
            </Container>
        </>
    );
}
