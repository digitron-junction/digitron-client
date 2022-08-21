import { useState, useEffect } from "react";
import { Stack, Grid } from "@mui/material";
import axios from "axios";
import { ProductCard, ProductCardExtended, MyBag } from "../../content/components";

import { Section, Comment } from "../../content/components";

export default function Product(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await axios(
                'https://junction-prod.onrender.com/api/v1/stores/1/products',
            );

            console.log(result.data.data.products);
            console.log("props.id", props.id);
            setProducts(result.data.data.products)
        })();
    }, []);

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
                        name="Cermaic Pots"
                        price={15880}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjvKjmNvzAs2McaxIHGHv9TCju-qsm6J3gU8Fa5Q8twBAWWTpzmsaCApSLtqMEoed4ok&usqp=CAU"
                    />
                    <ProductCard
                        name="Cotton Shawls"
                        price={1080}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuHKt5AY91mi4Nzmnp4-igSn6Fmi2FPgFPA&usqp=CAU"
                    />
                    <ProductCard
                        name="Pashmina Carpet"
                        price={1480}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcEeAsT7Tk2MkpoCUmxpo3GBpYE7iflOhiw&usqp=CAU"
                    />
                    <ProductCard
                        name="Paper Art"
                        price={10000}
                        discountedPrice={15000}
                        rating={3.2}
                        img="https://mymodernmet.com/wp/wp-content/uploads/2022/04/eugenia-zoloto-papear-art-war-2.jpg"
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