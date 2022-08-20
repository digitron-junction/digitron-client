import { Paper, Stack, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { QueryStats } from '@mui/icons-material';

interface StatCardProps {
    name: string;
    stat: string;
    growth?: string;
}

export default function StatCard(props: StatCardProps) {
    return (
        <Paper sx={{ height: '100%', p: 2 }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={{ xs: 1, sm: 2 }}
                sx={{ height: '100%' }}
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    width={{ xs: 40, sm: 50 }}
                    height={{ xs: 40, sm: 50 }}
                    sx={{
                        borderRadius: '100%',
                        background: (theme) =>
                            `linear-gradient(135.33deg, ${theme.palette.info.dark} 15.12%, ${theme.palette.info.main} 80.77%);`
                    }}
                >
                    <QueryStats
                        sx={{
                            width: 24,
                            height: 24,
                            color: 'white'
                        }}
                    />
                </Stack>
                <Stack alignItems="center" gap={1}>
                    <Typography variant="h4" align="center" fontSize={{ xs: 10, sm: 13 }}>
                        {props.name}
                    </Typography>
                    <Typography
                        variant="h1"
                        align="center"
                        fontSize={{ xs: 20, sm: 25 }}
                        sx={{ color: (theme) => theme.textColors.highlight.main }}
                    >
                        {props.stat}
                    </Typography>
                    <Typography variant="h5" align="center" fontSize={{ xs: 10, sm: 12 }}>
                        {props.growth}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
