import { TextField } from "@mui/material";
import { useState } from "react";

export default function TextInput({label, onChange}) {

    const [val, setVal] = useState();

    const handleChange = (e) => {
        setVal(e.target.value)
        onChange(e.target.value)
    }

    return <TextField 
        variant="outlined" 
        label={label} 
        onChange={handleChange}
        fullWidth 
        sx={{
            background: "linear-gradient(90deg, rgba(207, 229, 255, 0.67) 2.19%, rgba(209, 225, 243, 0.268) 100%)",
            border: "0.5px solid #FFFFFF",
            boxShadow: "0px 11px 30px rgba(68, 82, 82, 0.02)",
            borderRadius: "12.469px",
            placeholderColor: "#ff0000"
        }} 
    />
}