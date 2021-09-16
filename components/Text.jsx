import React from "react";
import styled, { withTheme } from "styled-components";

const StyledText = styled.p`
    margin: 0;
    color: ${({theme}) => theme.colors.primary};
    font-size: ${(props) =>
        props.theme.text.variant[props.variant] ||
        props.theme.text.variant.p}px;
    text-align: ${(props) => (props.center ? "center" : "")};
`;

export default function Text(props) {
    return (
        <StyledText
            as={props.variant || "p"}
            center={props.center}
            variant={props.variant}
        >
            {props.children}
        </StyledText>
    );
}
