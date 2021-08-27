import styled from "styled-components";
import { Container, Paper } from "styles/globalComponents";

const StyledPost = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    display: flex;
`;

const Intro = styled.p`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.h2`
    display: flex;
`;

const Text = styled.p`
    display: flex;
`;

export default function Post(props) {
    return (
        <Container>
            <StyledPost>
                <Title>Les années 2000 viennent envahir les écrans</Title>
                <Intro>
                    Après l’âge d’or de Facebook, Snapchat, puis Instagram,
                    voici venue l’heure de gloire de TikTok, application dominée
                    par la génération Z, également appelée la GenZ. Sur les
                    réseaux sociaux, la GenZ fait régner sa loi et impose ses
                    tendances, comme les années 2000, aussi appelées Y2K (pour
                    Year Two Thousands) qui sont remises au goût du jour.
                </Intro>
                <Content>
                    <SubTitle>
                        L’influence des réseaux sociaux dans le retour des
                        années 2000
                    </SubTitle>
                    <Text>
                        Si la Y2K fashion est aussi populaire auprès des jeunes
                        aujourd’hui, c’est en grande partie grâce aux réseaux
                        sociaux et au succès fulgurant de l’application TikTok.
                        La Génération Z est la première à être née avec le
                        numérique et à grandir dans un monde connecté, ce qui a
                        pour effet de faire évoluer la mode plus rapidement.
                        Cela rend également les tendances plus accessibles aux
                        jeunes qui peuvent les suivre directement de leur
                        téléphone grâce aux réseaux sociaux. Téléphone qui ont
                        une place importante dans leurs vies et qui, avec
                        l’arrivée des influenceurs, permet aux tendances de se
                        diffuser à grande échelle et ce, très rapidement. En ce
                        qui concerne la tendance de la Y2K fashion, elle se
                        diffuse principalement via Instagram et Tiktok, car ce
                        sont les réseaux où l’aesthetic et la mode sont
                        prépondérants. Ces outils de communication ont déjà
                        prouvé l’influence qu’ils pouvaient avoir dans
                        l’industrie de la musique (notamment grâce aux
                        différents challenges TikTok — il suffit qu’une musique
                        soit utilisée dans un challenge pour que celle-ci se
                        retrouve en top des charts quelques jours plus tard.
                        C’est d’ailleurs le cas de plusieurs musiques des années
                        2000 chantées par Mariah Carey, Justin Timberlake ou
                        même Britney Spears. Le retour des musiques de notre
                        enfance a sûrement été un début dans l’élan de nostalgie
                        ayant ramené les années 2000 à la vie dans nos
                        penderies. Avec la présence des influenceurs et le
                        succès des vidéos mode sur l’application, celle-ci est
                        devenue un réel pilier pour lancer les nouvelles
                        tendances. Même les plus grandes marques comme Yves
                        Saint Laurent ou Louis Vuitton sont présentes sur
                        Tiktok, preuve de son importance dans le milieu de la
                        mode en termes de moyen de communication et de
                        diffusion. Pour mesurer l’ampleur du phénomène, le #y2k
                        a déjà atteint plus de 2 milliards de vues (et plus de
                        320 millions pour le #Y2KAesthetic) sur TikTok. Quant à
                        Instagram, le #y2K comptabilise 2,1 milliards de
                        publications et 841 millions sur le #y2kaesthetic. Un
                        retour vers le passé qui replonge les utilisateurs dans
                        leur enfance le temps d’une publication. Des simples
                        photos à l’aesthetic Y2K aux total looks des années 2000
                        où les influenceurs imitent les outfits des stars de
                        l’époque, les posts séduisent leur public.
                    </Text>
                </Content>
            </StyledPost>
        </Container>
    );
}
