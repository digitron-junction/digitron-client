import { Grid, Avatar, Stack, Typography, Rating } from "@mui/material";

export default function CartItem(props) {
    return <Grid container direction="row">
        <Grid item xs={3}>
            <Avatar variant="rounded" src={props.img} sx={{width: "100%"}} />
        </Grid>
        <Grid item xs={9}>
            <Typography variant="h4">{props.name}</Typography>
            <Stack direction="row" justifyContent="space-between">
                <Rating value={3.7} readOnly />
                <Typography variant="h5">Qty: {props.qty}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5">{props.price}</Typography>
                <Typography variant="h5">Total: {props.price * props.qty}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={3}>
        </Grid>
    </Grid>
}