import { Container, Grid, Section } from "styles/globalComponents";
import Text from "components/Text";
import Card from "components/Card";

export default function Blog() {
    return (
        <Section space="sm">
            <Container maxWidth="lg">
                <Text center variant="h1">
                    Notre Blog
                </Text>
                <Grid columns={3} xs={1} md={2}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </Grid>
            </Container>
        </Section>
    );
}
