import { ThemeProvider } from "@mui/material";
import orion from "./orion";

export default function Provider(props) {
    return <ThemeProvider theme={orion}>
        {props.children}
    </ThemeProvider>
}