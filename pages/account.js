import { useAuth } from "hooks/useAuth";
import { Container } from "styles/globalComponents";
import Text from "components/Text";
import Button from "components/Button";
import withAuth from "components/HOC/withAuth";

function Account() {
    const { user, signout } = useAuth();

    return (
        <Container maxWidth="sm">
            <Text variant="h2" center>
                Bienvenue à {user.email}
            </Text>
            <Button center onClick={signout}>
                Se Déconnecter
            </Button>
        </Container>
    );
}

export default withAuth(Account);
