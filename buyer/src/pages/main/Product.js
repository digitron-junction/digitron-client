import { Stack, Grid } from "@mui/material";
import { ProductCard, ProductCardExtended, MyBag } from "../../content/components";

import { Section, Comment } from "../../content/components";

export default function Product(props) {
    return <Grid container spacing={10}>
        <Grid item xs={8}>
            <ProductCardExtended
                name="Pashmina Shawls"
                price={15880}
                discountedPrice={15000}
                rating={3.2}
                img="https://5.imimg.com/data5/SU/VP/MY-779056/pashmina-shawls-500x500.jpg"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            />
        </Grid>
        <Grid item xs={4}>
            <MyBag />
        </Grid>
        <Grid item xs={12}>
            <Section title="More from the artist">
                <Stack direction="row" gap={5}>
                    <ProductCard
                        name="Pashmina Shawls"
                        price={15880}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://5.imimg.com/data5/SU/VP/MY-779056/pashmina-shawls-500x500.jpg"
                    />
                    <ProductCard
                        name="Pashmina Shawls"
                        price={15880}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://5.imimg.com/data5/SU/VP/MY-779056/pashmina-shawls-500x500.jpg"
                    />
                    <ProductCard
                        name="Pashmina Shawls"
                        price={15880}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://5.imimg.com/data5/SU/VP/MY-779056/pashmina-shawls-500x500.jpg"
                    />
                    <ProductCard
                        name="Pashmina Shawls"
                        price={15880}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://5.imimg.com/data5/SU/VP/MY-779056/pashmina-shawls-500x500.jpg"
                    />
                </Stack>
            </Section>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }} gap={4} mt={15}>
            <Grid item xs={10}>
                <Section title="Top Comments">
                    <Stack gap={1}>
                        <Comment author="Anonymous Batman" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                        <Comment author="Anonymous Batman" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                        <Comment author="Anonymous Batman" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                    </Stack>
                </Section>
            </Grid>
            <Grid item xs={10}>
                <Section title="Verified Reviews">
                    <Stack gap={1}>
                        <Comment author="Anonymous Batman" rating={3.7} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                        <Comment author="Anonymous Batman" rating={3.7} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                        <Comment author="Anonymous Batman" rating={3.7} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                    </Stack>
                </Section>
            </Grid>
        </Grid>
    </Grid>
}