import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import { Demand, StatCard, SentimentalCommentBox, AddProductDialog, ProductsList, OrdersList } from 'src/components';

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
                <title>Inventory</title>
            </Helmet>

            {isAuthenticated && (
                <AddProductDialog open={addProductDialogVisible} onClose={() => showAddProductDialog(false)} />
            )}

            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 7 }}>
                    <Grid item xs={12} md={8} xl={9}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }} justifyContent="center">
                            <Grid item xs={6} xl={4}>
                                <StatCard name="Total Products" stat={6} />
                            </Grid>
                            <Grid item xs={6} xl={4}>
                                <StatCard name="Products Left" stat={3} />
                            </Grid>
                            <Grid item xs={6} xl={4}>
                                <StatCard name="Sold Products" stat={18} />
                            </Grid>
                            <Grid item xs={12}>
                                <ProductsList addProduct={() => showAddProductDialog(true)} />
                            </Grid>
                            <Grid item xs={12}>
                                <OrdersList />
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
            </Container>
        </>
    );
}
