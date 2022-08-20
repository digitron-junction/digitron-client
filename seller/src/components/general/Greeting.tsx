import { Stack, Avatar, Typography } from '@mui/material';

interface GreetingProps {
    photo: string;
}

export default function Greeting(props: GreetingProps) {
    return (
        <Stack direction="row" gap={2} alignItems="center">
            <Avatar alt="Hello" src={props.photo} sx={{ width: 54, height: 54 }} />
            <Stack>
                <Typography variant="h1">Hello, Artist</Typography>
                <Typography variant="subtitle1">Welcome to Junction Asia 2022</Typography>
            </Stack>
        </Stack>
    );
}
