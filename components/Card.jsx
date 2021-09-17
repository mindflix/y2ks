import { Paper } from "styles/globalComponents";
import styled from "styled-components";
import Text from "components/Text";

const StyledPaper = styled(Paper)``;

function Card(props) {
    return (
        <StyledPaper>
            <Text variant="h2">Hello</Text>
        </StyledPaper>
    );
}

export default Card;
