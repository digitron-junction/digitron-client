import { useRef } from 'react';
import { Grid } from '@mui/material';

import { Text as TextInput, Select as SelectInput } from 'src/components';

export default function PersonalDetailsForm({ onFormValuesChange }) {
    const formValues = useRef({});

    const handleChange = (key, value) => {
        formValues.current[key] = value;
        console.log(formValues.current);
        onFormValuesChange(formValues.current);
    };

    return (
        <Grid container rowSpacing={4} columnSpacing={3}>
            <Grid item xs={6}>
                <TextInput label="Your Name" onChange={(val) => handleChange('userName', val)} color="warning" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Store Name" onChange={(val) => handleChange('name', val)} />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Email" onChange={(val) => handleChange('email', val)} />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Phone No" onChange={(val) => handleChange('phone', val)} />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Store Categorey" onChange={(val) => handleChange('categorey', val)} />
            </Grid>
        </Grid>
    );
}
