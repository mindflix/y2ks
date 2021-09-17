import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
    font-weight: ${(props) => (props.strong ? "bold" : "")};
    line-height: ${(props) =>
        props.variant === "p" || !props.variant ? "26px" : ""};
    margin: 8px 0;
    z-index: 10;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${(props) =>
        props.theme.text.variant[props.variant] ||
        props.theme.text.variant.p}px;
    text-align: ${(props) => (props.center ? "center" : "")};
`;

export default function Text(props) {
    return (
        <StyledText
            {...props}
            as={props.variant || "p"}
            center={props.center}
            variant={props.variant}
        >
            {props.children}
        </StyledText>
    );
}
