import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Container, Grid, Card, CardHeader, CardContent, Divider, Box, List } from '@mui/material';
import { Demand, StatCard, SentimentalCommentBox, AddProductDialog, ProductsList, OrdersList } from 'src/components';
import {
    Stack,
    Typography,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    Rating,
    IconButton
} from '@mui/material';
import { ProductListItem } from 'src/components';
import { Add, Edit, Delete, MoreVert, Star } from '@mui/icons-material';

const products = [
    {
        name: 'Hand Knotted Silk Carpet',
        desc: 'Hand Knotted Silk Carpet. The pattern and colours are easy to coordinate with many different styles.',
        img: '/static/images/carpets/Antique-White-hand-knotted-silk-carpet.jpeg',
        rating: 5,
        price: '₹ 8799',
        discountedPrice: '₹ 8699',
        mintedNFT: false
    },
    {
        name: 'Oriental Design Rug',
        desc: 'Hand Knotted Kashmiri Carpet. The dense, thick pile dampens sound and provides a soft surface to walk on.',
        img: '/static/images/carpets/oriental-design-rug.png',
        rating: 4,
        price: '₹ 7699',
        discountedPrice: '₹ 7499',
        mintedNFT: false
    },
    {
        name: 'Silk Rug',
        desc: 'Hand Knotted Kashmiri Carpet. Designed in Persian Ardadil style.',
        img: '/static/images/carpets/persian-ardabil.jpeg',
        rating: 5,
        price: '₹ 9699',
        discountedPrice: '₹ 8499',
        mintedNFT: false
    }
];

const commentsData = {
    highlightedComment: {
        author: 'Ishaani Gurnan',
        content:
            'The crafts were very well made and detailed... very delightful to receive them. The materials were not chosen with care to the environment though',
        sentiment: 'positive'
    },

    allComments: [
        {
            author: 'Aman Shah',
            content: 'Very attractive craft items especially for festivities!',
            sentiment: 'positive'
        },
        {
            author: 'Sumit Bagadia',
            content: 'Received the articles on time and in good quality',
            sentiment: 'neutral'
        },
        {
            author: 'Lokesh Babban',
            content: 'The decorative pot was not of good quality and got damaged immediately after coming home',
            sentiment: 'negative'
        }
    ]
};

export default function Inventory() {
    const [addProductDialogVisible, showAddProductDialog] = useState(false);
    const isAuthenticated = window.ethereum || false;

    return (
        <>
            <Helmet>
                <title>My Products</title>
            </Helmet>

            {isAuthenticated && (
                <AddProductDialog open={addProductDialogVisible} onClose={() => showAddProductDialog(false)} />
            )}

            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 7 }}>
                    <Grid item xs={12} md={8} xl={9}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 4 }} justifyContent="center">
                            <Grid item xs={6} xl={4}>
                                <StatCard name="Total Products" stat={6} />
                            </Grid>
                            <Grid item xs={6} xl={4}>
                                <StatCard name="Products Left" stat={3} />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader
                                        title="Products in Inventory"
                                        action={
                                            <IconButton onClick={() => showAddProductDialog(true)}>
                                                <Add fontSize="small" />
                                            </IconButton>
                                        }
                                    />

                                    <CardContent>
                                        <List disablePadding>
                                            {products.map((product, index) => (
                                                <ProductListItem
                                                    key={index}
                                                    showButtons
                                                    name={product.name}
                                                    photo={product.img}
                                                    rating={product.rating}
                                                    desc={product.desc}
                                                    price={product.price}
                                                    mintedNFT={product.mintedNFT}
                                                    discountedPrice={product.discountedPrice}
                                                />
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} xl={3}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                            <Grid item xs={12}>
                                <Demand />
                            </Grid>
                            <Grid item xs={12}>
                                <SentimentalCommentBox
                                    highlightComment={true}
                                    highlightedComment={commentsData.highlightedComment}
                                    allComments={commentsData.allComments}
                                />
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
                <Box pb={40}></Box>
            </Container>
        </>
    );
}
