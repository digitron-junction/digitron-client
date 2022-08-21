import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper, Stack, Grid } from "@mui/material";
import { Carousel, Section, ProductCard } from "../../content/components";
import { HorizontalList } from "../../components";

import dummyData from "../../dummyData.json";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const chainId = "cosmoshub-4";
      // Enabling before using the Keplr is recommended.
      // This method will ask the user whether or not to allow access if they haven't visited this website.
      // Also, it will request user to unlock the wallet if the wallet is locked.
      await window.keplr.enable(chainId);

      const offlineSigner = window.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await axios(
        "https://junction-prod.onrender.com/api/v1/stores/1/products"
      );

      console.log(result.data.data.products);
      console.log("---");
      setProducts(result.data.data.products);
    })();
  }, []);

  return (
    <Stack alignItems="center" gap={10}>
      <Carousel />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Section title="My Products" showMore showMoreLink="/home">
          <Grid
            container
            spacing={6}
            columns={{ xs: 2, sm: 4, md: 8 }}
            columnGap={10}
          >
            {products.length > 0 &&
              products.map((product, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                  <ProductCard
                    name={product.name}
                    img={product.images}
                    rating={product.rating}
                    desc={product.description}
                    price={product.price}
                    mintedNFT={product.mintedNFT}
                    discountedPrice={product.discountedPrice}
                    likeCount={product.likeCount}
                  />
                </Grid>
              ))}
          </Grid>
        </Section>
      </Box>
    </Stack>
  );
}
