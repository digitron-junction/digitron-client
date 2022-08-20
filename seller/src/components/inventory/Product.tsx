import { Stack, Grid, Typography, Avatar, ListItem, ListItemAvatar, Button, Rating, IconButton } from '@mui/material';
import { Edit, Delete, Star } from '@mui/icons-material';

interface ProductProps {
    name: string;
    desc: string;
    sideTxt: string;
    photo: string;
    rating: number;
    price: string;
    mintedNFT: boolean;
    showButtons: boolean;
}

export default function ProductListItem(props: ProductProps) {
    return (
        <ListItem sx={{ alignItems: 'stretch', mb: 3 }}>
            <ListItemAvatar>
                <Avatar src={props.photo} variant="rounded" sx={{ width: 150, height: 150 }} />
            </ListItemAvatar>
            <Grid container spacing={2} sx={{ ml: 1 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h4">{props.name}</Typography>
                    <Typography variant="h6">{props.desc}</Typography>
                    <Rating
                        value={props.rating}
                        precision={0.5}
                        readOnly
                        icon={<Star color="primary" sx={{ fontSize: 32 }} />}
                        emptyIcon={<Star sx={{ color: '#C4C4C4', fontSize: 32 }} />}
                    />
                    <Typography variant="h5">${props.price}</Typography>
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
                    >
                        {props.mintedNFT ? 'Minted NFT' : 'Mint NFT'}
                    </Button>
                </Grid>
            </Grid>
        </ListItem>
    );
}
