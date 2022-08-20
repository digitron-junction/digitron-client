import { useState } from 'react';
import { Button, Typography, Container, Card, CardContent, Stack, Pagination } from '@mui/material';
import { PersonalDetailsForm, AddressDetailsForm, ArtistDetailsForm } from 'src/components';

export default function Onboarding() {
    const [page, setPage] = useState(1);

    const handleChange = (formValues) => {
        console.log(formValues);
    };

    const pages = [
        <PersonalDetailsForm onFormValuesChange={handleChange} />,
        <AddressDetailsForm />,
        <ArtistDetailsForm />
    ];

    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 10,
                backgroundColor: '#F8F8FF'
            }}
        >
            <Card>
                <CardContent>
                    <Typography variant="h3">Welcome to Junction Asia 2022</Typography>
                    <Typography variant="body1" mt={1}>
                        Let's set up your profile
                    </Typography>
                    <Stack alignItems="center" gap={4} mt={3}>
                        {pages[page - 1]}
                        <Pagination count={3} onChange={(e, val) => setPage(val)} hidePrevButton />
                        {val === 3 && (
                            <Button variant="contained" color="primary">
                                {' '}
                                Submit{' '}
                            </Button>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
