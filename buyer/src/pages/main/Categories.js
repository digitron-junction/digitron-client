import { Category } from "@mui/icons-material";
import { Card, CardContent, Stack, Avatar, Grid, Typography } from "@mui/material";

import { Section } from "../../content/components";

import dummyData from "../../dummyCategories.json";

export default function CategoriesPage() {
    return <Section title="Categories">
        <Grid container spacing={5}>
        {
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
        }
        </Grid>
    </Section>
}