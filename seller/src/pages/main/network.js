import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { List, Container, Grid, Card, CardHeader, CardContent, Divider, Typography, Box } from '@mui/material';
import { ProductListItem, SectionCard, FAQ, Wallet, OrderListItem, Profile, BuyerProfile } from 'src/components';

const products = [
    {
        name: 'Good Product',
        email: 'harshaldave74@gmail.com',
        phone: '+91 9619274625',
        img: '/static/images/Image.png',
    },
    {
        name: 'A very Good Product',
        email: 'harshaldave74@gmail.com',
        phone: '+91 9619274625',
        img: '/static/images/Image.png',
    }
];

export default function Network() {
    return (
        <>
            <Helmet>
                <title>My Orders</title>
            </Helmet>
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 7 }}>
                    <Grid item xs={6} md={6} xl={6}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <SectionCard title="Consumers">
                                    <List>
                                        {products.map((product, index) => (
                                            <BuyerProfile
                                                key={index}
                                                name={product.name}
                                                photo={product.img}
                                                email={product.email}
                                                phone={product.phone}
                                            />
                                        ))}
                                    </List>
                                </SectionCard>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <SectionCard title="Followers">
                                    <List>
                                        {products.map((product, index) => (
                                            <BuyerProfile
                                                key={index}
                                                name={product.name}
                                                photo={product.img}
                                                email={product.email}
                                                phone={product.phone}
                                            />
                                        ))}
                                    </List>
                                </SectionCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box pb={50}></Box>
            </Container>
        </>
    );
}
