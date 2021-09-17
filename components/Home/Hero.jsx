import { Box, Container, Paper } from "styles/globalComponents";
import Image from "next/image";
import Text from "components/Text";
import heroBg from "public/images/section1.jpg";
import Button from "components/Button";
import styled from "styled-components";

const Div1 = styled.div`
    max-width: 500px;
    & > * {
        margin-top: 24px;
    }
`;

export default function Hero() {
    return (
        <Paper square style={{ background: "hsl(0, 0%, 95%)" }}>
            <Container maxWidth="lg">
                <Text variant="h1">La box de septembre</Text>
                <Div1>
                    <Text variant="h2">
                        <strong>13,90€ livraison incluse</strong> pour 60€
                        minimum de valeur
                    </Text>
                    <Text>
                        En septembre, on replonge dans le grand bain de la
                        beauté. Au programme, 5 miniatures beauté expertes de
                        haute volée. Exceptionnellement, elles se glissent dans
                        un maxi cabas de rentrée !
                    </Text>
                    <Button>Commander ma box</Button>
                </Div1>
            </Container>
            <div
                style={{
                    position: "absolute",
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                    opacity: 0.2,
                }}
            >
                <Image
                    alt="Mountains"
                    src={heroBg}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
        </Paper>
    );
}
