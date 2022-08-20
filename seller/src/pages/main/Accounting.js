import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { List, Container, Grid, Card, CardHeader, CardContent, Divider, Typography } from '@mui/material';
import { ProductListItem, SectionCard, FAQ, Wallet } from 'src/components';

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
                <title>Accounting</title>
            </Helmet>
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 7 }}>
                    <Grid item xs={12} md={8} xl={9}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <SectionCard title="NFT Products">
                                    <List>
                                        {products.map((product, index) => (
                                            <ProductListItem
                                                key={index}
                                                name={product.name}
                                                photo={product.img}
                                                rating={product.rating}
                                                desc={product.desc}
                                                price={product.price}
                                                mintedNFT={product.mintedNFT}
                                                discountedPrice={product.discountedPrice}
                                                sideTxt="NFT ID goes here"
                                            />
                                        ))}
                                    </List>
                                </SectionCard>
                            </Grid>
                            <Grid item xs={12}>
                                <SectionCard title="Sold NFT">
                                    <List>
                                        {products.map((product, index) => (
                                            <ProductListItem
                                                key={index}
                                                name={product.name}
                                                photo={product.img}
                                                rating={product.rating}
                                                desc={product.desc}
                                                price={product.price}
                                                mintedNFT={product.mintedNFT}
                                                discountedPrice={product.discountedPrice}
                                                sideTxt="NFT ID goes here"
                                            />
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
            </Container>
        </>
    );
}
