import { Container, Box, Paper, Stack, Typography, Button, Avatar, Pagination } from "@mui/material";

export default function Carousel(props) {
    return <Paper sx={{p: 10}}>
        <Container>
            <Stack direction="row" gap={10}>
                <Stack gap={2} justifyContent="center">
                    <Typography variant="h1" mb={2}>Buy Korean Candles</Typography>
                    <Typography variant="h4" mb={2} sx={{fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Button variant="contained" sx={{width: "50%"}}>Go to Product</Button>
                </Stack>
                <Avatar variant="rounded" src="https://m.media-amazon.com/images/I/71L-ihLW2nL._SX679_.jpg" sx={{width: "30%", height: "100%"}} />
            </Stack>
        </Container>
    </Paper>
}