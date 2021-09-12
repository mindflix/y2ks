import React from "react";
import styled, { withTheme } from "styled-components";

const StyledText = styled.p`
    margin: 8px 0;
    font-size: ${(props) =>
        props.theme.text.variant[props.variant] ||
        props.theme.text.variant.p}px;
`;

export default function Text(props) {
    return (
        <StyledText as={props.variant || "p"} variant={props.variant}>
            {props.children}
        </StyledText>
    );
}
