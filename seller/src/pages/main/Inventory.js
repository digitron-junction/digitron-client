import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Grid, Card, CardHeader, CardContent, Box, List } from '@mui/material';
import { StatCard, SentimentalCommentBox, AddProductDialog } from 'src/components';
import {
    IconButton
} from '@mui/material';
import { ProductListItem } from 'src/components';
import { Add } from '@mui/icons-material';

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

    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await axios(
                'https://junction-prod.onrender.com/api/v1/stores/1/products',
            );

            console.log(result.data.data.products);
                console.log("---")
            setProducts(result.data.data.products)
        })();
    }, []);

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
                                <StatCard name="Total Products" stat={products.length} />
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
                                            {products.length > 0 && products.map((product, index) => (
                                                <ProductListItem
                                                    key={index}
                                                    showButtons
                                                    name={product.name}
                                                    photo={product.images[0].url}
                                                    rating={product.rating}
                                                    desc={product.description}
                                                    price={product.price}
                                                    mintedNFT={product.mintedNFT}
                                                    discountedPrice={product.discountedPrice}
                                                    likeCount={product.likeCount}
                                                    stock={product.stock}
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
                                {/* <Demand /> */}
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
