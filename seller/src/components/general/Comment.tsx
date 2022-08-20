import { Box, Typography, useTheme } from '@mui/material';

interface CommentProps {
    title: string;
    content: string;
    style: 'blue' | 'golden' | 'positive' | 'partiallyNegative' | 'neutral' | 'partiallyPositive' | 'negative';
}

export default function Comment(props: CommentProps) {
    const theme = useTheme();

    const styles: Record<CommentProps['style'], React.CSSProperties> = {
        blue: {
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 1.49%, ${theme.palette.primary.light} 100%)`,
            boxShadow: theme.shadow.main
        },
        golden: {
            background: `linear-gradient(269.95deg, ${theme.palette.warning.main} 0.02%, ${theme.palette.warning.light} 97.45%)`,
            boxShadow: theme.shadow.main
        },
        positive: theme.sentimentConfig.positive,
        partiallyNegative: theme.sentimentConfig.partiallyNegative,
        neutral: theme.sentimentConfig.neutral,
        partiallyPositive: theme.sentimentConfig.partiallyPositive,
        negative: theme.sentimentConfig.negative
    };

    return (
        <Box p={2} borderRadius={3} sx={styles[props.style]}>
            <Typography variant="h4" color="white">
                {props.title}
            </Typography>
            <Typography variant="body2" mt={1}>
                {props.content}
            </Typography>
        </Box>
    );
}
