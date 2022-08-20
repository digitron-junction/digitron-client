import { Grid } from '@mui/material';
import { Text as TextInput } from 'src/components/';

export default function PersonalDetailsForm() {
    return (
        <Grid container rowSpacing={4} columnSpacing={3}>
            <Grid item xs={12}>
                <TextInput label="Address Line 1" />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Address Line 2" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="City" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Pincode" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="State" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="District" />
            </Grid>
        </Grid>
    );
}
