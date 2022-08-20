/*
    Format for products-
        props.products = [
            {
                name: string,
                desc: string,
                img: string,
                rating: float,
                price: float,
                discountedPrice: float,
                mintedNFT: boolean
            }
        ]
*/

import {
    Stack,
    CardHeader,
    Grid,
    Typography,
    Box,
    Avatar,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    Rating,
    IconButton
} from '@mui/material';
import { ProductListItem } from 'src/components';
import { Add, Edit, Delete, MoreVert, Star } from '@mui/icons-material';

const products = [
    {
        name: 'Hand Knotted Silk Carpet',
        desc: 'Hand Knotted Silk Carpet. The pattern and colours are easy to coordinate with many different styles.',
        img: '/static/images/carpets/Antique-White-hand-knotted-silk-carpet.jpeg',
        rating: 5,
        price: '$ 8799',
        discountedPrice: '$ 8699',
        mintedNFT: false
    },
    {
        name: 'Oriental Design Rug',
        desc: 'Hand Knotted Kashmiri Carpet. The dense, thick pile dampens sound and provides a soft surface to walk on.',
        img: '/static/images/carpets/oriental-design-rug.png',
        rating: 4,
        price: '$ 7699',
        discountedPrice: '$ 7499',
        mintedNFT: false
    },
    {
        name: 'Silk Rug',
        desc: 'Hand Knotted Kashmiri Carpet. Designed in Persian Ardadil style.',
        img: '/static/images/carpets/persian-ardabil.jpeg',
        rating: 5,
        price: '$ 9699',
        discountedPrice: '$ 8499',
        mintedNFT: false
    }
];

export default function ProductsList(props) {
    return (
        <Card>
            <CardHeader
                title="Products in Inventory"
                action={
                    <IconButton onClick={props.addProduct}>
                        <Add fontSize="small" />
                    </IconButton>
                }
            />

            <CardContent>
                <List disablePadding>
                    {products.map((product, index) => (
                        <ProductListItem
                            key={index}
                            showButtons
                            name={product.name}
                            photo={product.img}
                            rating={product.rating}
                            desc={product.desc}
                            price={product.price}
                            mintedNFT={product.mintedNFT}
                            discountedPrice={product.discountedPrice}
                        />
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
