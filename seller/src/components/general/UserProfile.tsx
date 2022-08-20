import { Stack, Paper, Box, Avatar, Typography } from '@mui/material';

import { Notifications, Languages, Messages } from 'src/components';

interface UserProfileProps {
    name: string;
    type: string;
    photo: string;
}

export default function UserProfile(props: UserProfileProps) {
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="center" gap={{ md: 1, xl: 1.5 }} p={2}>
                <Stack direction="row" gap={1} alignItems="center">
                    <Avatar alt={props.name} src={props.photo} sx={{ width: 32, height: 32 }} />
                    <Box>
                        <Typography variant="h3">{props.name}</Typography>
                        <Typography variant="caption" sx={{ mt: 0.5 }}>
                            {props.type}
                        </Typography>
                    </Box>
                </Stack>
                <Messages />
                <Notifications />
                <Languages />
            </Stack>
        </Paper>
    );
}
