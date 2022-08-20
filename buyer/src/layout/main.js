import { Box, Container } from "@mui/material";
import { Navbar } from "../content/components";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Dhabba1 = styled(Box)(
    ({theme}) => `
        position: absolute;
        left: 63.77%;
        right: -5.73%;
        top: -4.11%;
        bottom: 78.01%;

        background: linear-gradient(219.99deg, rgba(237, 125, 255, 0.3) 43.63%, rgba(155, 55, 233, 0.05) 104.1%);
        // background: red;
        filter: blur(121.771px);
    `
)

const Dhabba2 = styled(Box)(
    ({theme}) => `
        position: absolute;
        left: -6.08%;
        right: 62.33%;
        top: 2.8%;
        // bottom: 58.87%;
        bottom: 40%;

        background: linear-gradient(180deg, rgba(173, 94, 235, 0.3) 0%, rgba(235, 94, 212, 0.029) 100%);
        // background: red;
        filter: blur(130px);
    `
)

const Dhabba3 = styled(Box)(
    ({theme}) => `
        position: absolute;
        left: 49.25%;
        right: -7.29%;
        // top: 79.96%;
        top: 69.96%;
        bottom: -12.48%;

        background: linear-gradient(180deg, rgba(190, 94, 235, 0.3) 0%, rgba(235, 94, 212, 0.0261) 100%);
        // background: red;
        filter: blur(130px);
    `
)

export default function MainLayout(props) {
    return (
        <Box sx={{background: theme => theme.gradients.purple[100], position: "relative", overflow: "hidden"}}>
            <Dhabba1 />
            <Dhabba2 />
            <Dhabba3 />
            <Navbar />
            <Box sx={{m: "auto", py: 10, width: {xl: "80%", lg: "80%", xs: "90%"}}}>
                <Outlet />
            </Box>
        </Box>
    )
}