import styled from "styled-components";
import Text from "components/Text";
import TextField from "components/TextField";
import { IoLockClosed, IoFingerPrintOutline } from "react-icons/io5";
import { Container, Paper, Box } from "styles/globalComponents";
import Button from "components/Button";

export default function Account() {
    return (
        <Container maxWidth="sm">
            <SignIn />
        </Container>
    );
}

const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    width: 72px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
`;

const StyledPaper = styled(Paper)`
    margin-top: 100px;
    flex-direction: column;
`;

const Div1 = styled.div`
    padding: 12px 0;
    width: 100%;
`;

function SignIn() {
    return (
        <StyledPaper>
            <StyledIcon>
                <IoLockClosed size={36} />
            </StyledIcon>
            <Text variant="h2">Se connecter</Text>
            <Div1>
                <TextField label="Email*" type="text" fullWidth />
                <TextField label="Password*" type="password" fullWidth />
            </Div1>
            <Button
                icon={<IoFingerPrintOutline size={24} />}
                style={{ margin: " 0 0 0 auto", width: "200px" }}
            >
                Connexion
            </Button>
        </StyledPaper>
    );
}
