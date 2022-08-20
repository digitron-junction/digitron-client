import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Section } from "../../content/components";

export default function MyBag(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Your Bag</Typography>
        <Typography variant="h4" mt={5} sx={{ fontWeight: 400 }}>
          Your bag is empty
        </Typography>
        <Typography variant="h4" mt={2} sx={{ fontWeight: 400 }}>
          Buy Now!
        </Typography>
        <img src="/assets/wolf-leftpoint.png" width="300px" height="370px" />
      </CardContent>
    </Card>
  );
}
