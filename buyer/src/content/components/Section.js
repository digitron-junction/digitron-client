import { Stack, Typography } from "@mui/material";

export default function Section(props) {
    return <Stack>
        <Stack direction="row" justifyContent="space-between" mb={5}>
            <Typography variant="h3">{props.title}</Typography>
            {props.show && <Typography variant="body1" sx={{color: "#474A57"}} onClick={() => alert("Boom")}>See All</Typography>}
        </Stack>
        {props.children}
    </Stack>
}