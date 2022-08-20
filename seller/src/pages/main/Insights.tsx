import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';

function Analysis() {
    return (
        <>
            <Helmet>
                <title>Forms - Components</title>
            </Helmet>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                </Grid>
            </Container>
        </>
    );
}

export default Analysis;
