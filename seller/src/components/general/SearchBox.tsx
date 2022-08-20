import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBox() {
    return (
        <TextField
            label="Search"
            variant="outlined"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search sx={{ color: (theme) => theme.textColors.secondary.dark }} />
                    </InputAdornment>
                )
            }}
            sx={{
                minWidth: '30%',
                borderRadius: 4,
                background: (theme) => theme.palette.section.light,
                boxShadow: (theme) => theme.shadow.main,
                '& .MuiInputLabel-root, & .MuiOutlinedInput-input': {
                    fontSize: 16
                },
                '& .MuiInputLabel-root': {
                    color: (theme) => theme.textColors.secondary.light
                },
                '& .MuiOutlinedInput-input': {
                    color: (theme) => theme.textColors.secondary.main,
                    padding: {
                        lg: 1.5,
                        xs: 1
                    }
                }
            }}
        />
    );
}
