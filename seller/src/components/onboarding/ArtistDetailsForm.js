import { Grid } from '@mui/material';
import { Text as TextInput } from 'src/components/';

export default function PersonalDetailsForm() {
    return (
        <Grid container rowSpacing={4} columnSpacing={3}>
            <Grid item xs={6}>
                <TextInput label="Preferred Language" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Artist Type" />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Artist Bio" />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Paypal ID" />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Crypto Waller" />
            </Grid>
        </Grid>
    );
}
