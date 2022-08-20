import { Avatar, Card, CardContent, Typography, Grid, Stack } from "@mui/material"
import { CartItem, Section } from "../../content/components";

function OrdersCollection({date, orders}) {
    <Card>
        <CardContent>
            <Typography variant="h3">Ordered on: {date} </Typography>
            {
                orders.map(order => (
                    <CartItem 
                        name={order.name}
                        img={order.img}
                        price={order.price}
                        rating={order.rating}
                        qty={order.qty}
                    />
                ))
            }
        </CardContent>
    </Card>
}

export default function OrdersPage(props) {
    return <Section title="My Orders">
        <Grid container spacing={5}>
            <Grid item xs={8}>
                {/* {props.orders.map(order => (
                    <OrdersCollection date={order.date} orders={/>
                ))} */}
            </Grid>
            <Grid item xs={4}>

            </Grid>
        {/* {

            dummyData.map(category => (
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Stack alignItems="center" gap={2}>
                                <Avatar variant="rounded" src={category.categoreyImage} sx={{width: "100%", height: "200px", m: "auto"}} />
                                <Typography variant="h4">{category.categoreyName}</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        } */}
        </Grid>
    </Section>
}