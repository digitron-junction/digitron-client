import { Card, CardContent, Typography, Box } from '@mui/material';

interface SectionCardProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export default function SectionCard(props: SectionCardProps) {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                {props.title && <Typography variant="h2">{props.title}</Typography>}
                {props.subtitle && (
                    <Typography variant="subtitle2" mt={1}>
                        {props.subtitle}
                    </Typography>
                )}
                <Box mt={2}>{props.children}</Box>
            </CardContent>
        </Card>
    );
}
