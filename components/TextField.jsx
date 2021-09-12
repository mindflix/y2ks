import { useState, useRef } from "react";
import styled from "styled-components";
import Text from "components/Text";

const StyledTextField = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : false)};
    padding: ${(props) => (props.label ? "20px 0 20px 0" : "")};
`;

const StyledTextFieldBase = styled.div`
    display: flex;
    padding: ${(props) => {
        if (props.size === "small") {
            return "8px 10px";
        } else {
            return "16px 32px";
        }
    }};
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
`;

const StyledLabel = styled.div`
    position: absolute;
    z-index: 1;
    font-weight: 600;
    transition: all 0.3s ease;
    transform: ${(props) =>
        props.active ? "translate(-20px, -44px) scale(0.75, 0.75)" : ""};
    & > * {
        font-size: 1.2rem;
    }
`;

const StyledInput = styled.input`
    z-index: 2;
    width: 100%;
    padding: 0;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.02rem;
    box-sizing: content-box;
    border: 0;
    background: none;
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

const StyledIconButton = styled.button`
    min-width: 36px;
    padding: 0;
    margin: auto;
    border: 0;
    background: none;
`;

export default function TextField(props) {
    const [isActive, setActive] = useState(false);

    const handleChange = (e) => {
        if (e.target.value !== "") {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    return (
        <StyledTextField label={props.label} fullWidth={props.fullWidth}>
            <StyledTextFieldBase size={props.size}>
                {props.label ? (
                    <StyledLabel active={isActive}>
                        <Text>{props.label}</Text>
                    </StyledLabel>
                ) : null}
                <StyledInput
                    type={props.type || "text"}
                    onChange={handleChange}
                    {...props}
                />
                {props.icon ? (
                    <StyledIconButton>{props.icon}</StyledIconButton>
                ) : null}
            </StyledTextFieldBase>
        </StyledTextField>
    );
}
