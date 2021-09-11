import styled from "styled-components";
import { Container, Paper, Wrap } from "styles/globalComponents";

export default function Account() {
    return (
        <Container>
            <SignIn />
        </Container>
    );
}

const StyledPaper = styled(Paper)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function SignIn() {
    return <StyledPaper>Test</StyledPaper>;
}
