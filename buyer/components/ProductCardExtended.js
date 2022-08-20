import { Button, Card, Typography, Box, Stack, CardContent, Avatar, Rating } from "@mui/material";

export default function ProductCard(props) {
    return <Card sx={{width: "100%"}}>
        <CardContent>
            <Stack direction="row" gap={3}>
                <Avatar variant="rounded" src={props.img} sx={{m: "auto", width: "30%", height: "30%"}} />
                <Stack gap={2}>
                    <Typography variant="h4" mt={1}>{props.name}</Typography>
                    <Typography variant="h5">{props.price}</Typography>
                    <Rating value={props.rating} readOnly />

                    <Stack direction="row" mt={2} gap={3}>
                        <Button variant="outlined" sx={{width: "30%"}}>Add to Cart</Button>
                        <Button variant="contained" sx={{width: "30%"}}>Buy Now</Button>
                    </Stack>

                    <Typography variant="body" mt={1}>
                        Description:
                        <br />
                        <br />
                        {props.desc}
                    </Typography>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
}