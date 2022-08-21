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
                <TextInput label="First Name" onChange={(val) => handleChange('firstName', val)} color="warning" />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Last Name" onChange={(val) => handleChange('lastName', val)} />
            </Grid>
            <Grid item xs={12}>
                <TextInput label="Email" onChange={(val) => handleChange('email', val)} />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Date of birth" onChange={(val) => handleChange('dateOfBirth', val)} />
            </Grid>
            <Grid item xs={6}>
                <SelectInput
                    label="Gender"
                    options={['Male', 'Female']}
                    onChange={(val) => handleChange('gender', val)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Age" onChange={(val) => handleChange('age', val)} />
            </Grid>
            <Grid item xs={6}>
                <TextInput label="Phone Number" onChange={(val) => handleChange('phoneNumber', val)} />
            </Grid>
        </Grid>
    );
}
