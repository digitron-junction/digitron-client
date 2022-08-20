import { Grid, Typography, Avatar, ListItem, ListItemAvatar, Button, Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

interface OrderProps {
    name: string;
    desc: string;
    photo: string;
    rating: number;
    price: string;
    mintedNFT: boolean;
    onAccept: () => void;
    onDecline: () => void;
    onTransferNFT: () => void;
}

export default function Order(props: OrderProps) {
    return (
        <ListItem sx={{ alignItems: 'stretch', mb: 3 }}>
            <ListItemAvatar>
                <Avatar src={props.photo} variant="rounded" sx={{ width: 150, height: 150 }} />
            </ListItemAvatar>
            <Grid container spacing={2} sx={{ ml: 1 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h4">{props.name}</Typography>
                    <Typography variant="body1">{props.desc}</Typography>
                    <Rating
                        value={props.rating}
                        precision={0.5}
                        readOnly
                        icon={<Star color="primary" sx={{ fontSize: 32 }} />}
                        emptyIcon={<Star sx={{ color: '#C4C4C4', fontSize: 32 }} />}
                    />
                    <Typography variant="h5">{props.price}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                    }}
                >
                    {props.mintedNFT ? (
                        <Button onClick={props.onAccept}>Accept</Button>
                    ) : (
                        <Button onClick={props.onTransferNFT}>Transfer NFT</Button>
                    )}
                    <Button onClick={props.onDecline}> Decline </Button>
                </Grid>
            </Grid>
        </ListItem>
    );
}
