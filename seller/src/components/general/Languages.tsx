import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton, Button, Popover, Typography } from '@mui/material';

import {useState} from "react";

export default function Language() {
    //  const [anchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);

    return <>
        <IconButton>
            <TranslateIcon fontSize="small" />
        </IconButton>
        {/* <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
        >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover> */}
    </>
}