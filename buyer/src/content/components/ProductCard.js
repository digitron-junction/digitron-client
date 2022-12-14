import { Button, Card, Typography, Box, Stack, CardContent, Avatar, Rating } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/product/" + props.id,)
    }

    return <Card sx={{width: "300px"}} onClick={handleClick}>
        <CardContent>
            <Stack gap={1}>
                <Avatar variant="rounded" src={props.img} sx={{m: "auto", width: "80%", height: "100%"}} />
                <Typography variant="h4" mt={1}>{props.name}</Typography>
                <Typography variant="h5">{props.price}</Typography>
                <Rating value={props.rating} readOnly />
                <Typography variant="h6" sx={{ textDecoration: 'underline' }}>{props.likeCount} likes</Typography>
            </Stack>
            <Stack direction="row" mt={2} justifyContent="space-between">
                <Button variant="contained" sx={{width: "100%"}}>Buy Now</Button>
            </Stack>
        </CardContent>
    </Card>
}