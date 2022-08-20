import { Button, Card, Typography, Box, Stack, CardContent, Avatar, Rating } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/product")
    }

    return <Card sx={{width: "300px"}} onClick={handleClick}>
        <CardContent>
            <Stack gap={1}>
                <Avatar variant="rounded" src={props.img} sx={{m: "auto", width: "80%", height: "100%"}} />
                <Typography variant="h4" mt={1}>{props.name}</Typography>
                <Typography variant="h5">{props.price}</Typography>
                <Rating value={props.rating} readOnly />
            </Stack>
            <Stack direction="row" mt={2} justifyContent="space-between">
                <Button variant="outlined" sx={{px: 1, py: 1, width: "45%"}}>Add to Cart</Button>
                <Button variant="contained" sx={{width: "45%"}}>Buy Now</Button>
            </Stack>
        </CardContent>
    </Card>
}