import { Stack, Grid, Typography, Avatar, ListItem, ListItemAvatar, Button, Rating, IconButton } from '@mui/material';
import { Edit, Delete, Star } from '@mui/icons-material';

export default function UserProfile(props) {
    return (
        <ListItem sx={{ alignItems: 'stretch', mb: 3 }}>
            <ListItemAvatar>
                <Avatar src={props.photo} variant="rounded-full" sx={{ width: 50, height: 50 }} />
            </ListItemAvatar>
            <Grid container spacing={2} sx={{ ml: 1 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h3">{props.name}</Typography>
                    <Typography variant="h4">{props.email}</Typography>
                    <Typography variant="h5">{props.phone}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between'
                    }}
                >
                    {props.showButtons && (
                        <Stack direction="row" justifyContent="flex-end" sx={{ width: { xs: '50%', sm: '30%' } }}>
                            <IconButton>
                                <Edit color="primary" />
                            </IconButton>
                            <IconButton>
                                <Delete color="error" />
                            </IconButton>
                        </Stack>
                    )}
                    <Button
                        variant="contained"
                        color={'success'}
                        size="small"
                        sx={{
                            width: { xs: '100%', sm: '50%' },
                            color: 'white',
                            backgroundColor: (theme) => theme.palette['success'].main,
                            p: (theme) => theme.spacing(1, 2),
                            borderRadius: 2,
                            textAlign: 'center'
                        }}
                    > Mail
                    </Button>
                </Grid>
            </Grid>
        </ListItem>
    );
}
