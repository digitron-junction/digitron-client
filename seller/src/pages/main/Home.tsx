import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Sales, Demand, Demand2, StatCard, SentimentalCommentBox, ProjectedSales } from 'src/components';

function Home() {
    const theme = useTheme();
    const isScreenSmallUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Helmet>
                <title>3 Commerce Dashboard</title>
            </Helmet>
            <Grid container direction="row" justifyContent="center" spacing={{ xs: 4, xl: 6 }}>
                <Grid item xs={12} md={8} xl={9}>
                    <Grid container rowSpacing={{ xs: 2, sm: 4 }} columnSpacing={{ xs: 2, sm: 4, xl: 4 }}>
                        <Grid item xs={6} xl={3}>
                            <StatCard name="Total Products" stat="28" growth="Categories: 5" />
                        </Grid>
                        <Grid item xs={6} xl={3}>
                            <StatCard name="Monthly Sales" stat="95" growth="+3.7%" />
                        </Grid>
                        <Grid item xs={6} xl={3}>
                            <StatCard name="Average Rating" stat="4.1" growth="+1.7%" />
                        </Grid>
                        <Grid item xs={6} xl={3}>
                            <StatCard name="NFT Sold" stat="17" />
                        </Grid>
                        {!isScreenSmallUp && (
                            <Grid item xs={12}>
                                <Demand />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Sales />
                        </Grid>
                        <Box pb={120}></Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} xl={3}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 4, xl: 7 }}>
                        {isScreenSmallUp && (
                            <Grid item xs={12}>
                                <Demand />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
