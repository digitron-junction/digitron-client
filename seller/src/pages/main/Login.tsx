import { useContext } from 'react';
import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
// import Hero from './Login/Hero';

import { UserContext } from 'src/contexts/User';
import { NoProvider } from 'src/utils/errors';

const OverviewWrapper = styled(Box)(
    ({ theme }) => `
        overflow: auto;
        flex: 1;
        overflow-x: hidden;
        align-items: center;
    `
);

function Overview() {
    const user = useContext(UserContext);
    if (!user) throw NoProvider('User Context');

    return (
        <OverviewWrapper>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Container maxWidth="lg">
                <Card
                    sx={{ p: 10, mb: 10, borderRadius: 12 }}
                    onClick={() => {
                        console.log(user.login('admin', 'lmao'));
                    }}
                >
                    {/* <Hero /> */}
                </Card>
            </Container>
        </OverviewWrapper>
    );
}

export default Overview;
