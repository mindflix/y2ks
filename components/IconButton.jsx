import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.primary};
    border: 0;
`;

export default function IconButton(props) {
    const [isHover, setHover] = useState(false);

    return (
        <StyledButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            {!isHover ? props.icon : props.iconHover}
        </StyledButton>
    );
}
