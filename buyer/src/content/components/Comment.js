import { Stack, Typography, Rating } from "@mui/material";

export default function Comment(props) {
    return (
        <Stack sx={{
            p: 2,
            background: "white",
            borderRadius: 3,
            gap: 2
        }}>
            <Typography variant="h4">{props.author}</Typography>
            {props.rating && <Rating name="read-only" value={props.rating} readOnly />}
            <Typography variant="body1" mt={1}>{props.content}</Typography>
        </Stack>
    )
}