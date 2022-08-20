import { TextField, MenuItem, Grid, Button, Typography, Container, Card, CardContent, Stack, Pagination } from "@mui/material";
import { useState } from "react";

function TextInput({label}) {
    return <TextField 
        variant="outlined" 
        label={label} 
        fullWidth 
        sx={{
            background: "linear-gradient(90deg, rgba(240, 207, 255, 0.67) 2.19%, rgba(232, 209, 243, 0.268) 100%)",
            border: "0.5px solid #FFFFFF",
            borderRadius: "12.469px"
        }} 
    />
}

function SelectInput({label, options}) {
  return (
    <>
      <TextField
        select
        fullWidth
        label={label}
        sx={{
          background: "linear-gradient(90deg, rgba(240, 207, 255, 0.67) 2.19%, rgba(232, 209, 243, 0.268) 100%)",
          border: '0.5px solid #FFFFFF',
          borderRadius: '12.469px'
        }}
      >
        {options.map((index, option) => (
          <MenuItem key={index + option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

function AddressDetails() {
    return <Grid container rowSpacing={4} columnSpacing={3}>
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
}

function WalletDetails() {
    return <Grid container spacing={4}>
        <Grid item xs={12}>
            <TextInput label="PayPal ID" />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{textAlign: "center"}}>--- OR ---</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextInput label="UPI ID" />
        </Grid>
        <Grid item xs={12}>
            <TextInput label="Crypto Waller" />
        </Grid>
    </Grid>
}

export default function OrderDetails() {
    const [page, setPage] = useState(1);

    const pages = [
        <AddressDetails />,
        <WalletDetails />
    ]

    return <Container maxWidth="md" sx={{
        mt: 10,
        backgroundColor: "#F8F8FF"
    }}>
        <Card>
            <CardContent>
                <Typography variant="h3">We need some details to place your order</Typography>
                <Stack alignItems="center" gap={4} mt={3}>
                    { pages[page-1] }
                    <Pagination count={2} onChange={(e, val) => setPage(val)} hidePrevButton />
                    {
                        page === 2 && <Button variant="contained" color="primary"> Submit </Button>
                    }
                </Stack>
            </CardContent>
        </Card>
    </Container>
}