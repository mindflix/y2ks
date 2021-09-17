import { useState, forwardRef, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Text from "components/Text";

const StyledTextField = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : false)};
    padding-top: 8px;
    padding-bottom: 8px;
`;

const StyledTextFieldBase = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    cursor: text;
    box-sizing: border-box;
`;

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    line-height: 1.5px;
    left: 0;
    & > p {
        margin: 0;
        font-size: 1em;
    }
    letter-spacing: 0.02rem;
    z-index: 1;
    transform: ${(props) =>
        props.active
            ? "translate(26px, -1px) scale(0.75)"
            : "translate(20px, 24px) scale(1)"};
    transform-origin: top left;
    transition: all 0.3s ease;
    pointer-events: none;
`;

const StyledInputBase = styled.input`
    display: flex;
    width: 100%;
    font-size: 1em;
    padding: 18.5px 20px;
    letter-spacing: 0.02rem;
    box-sizing: content-box;
    border: 0;
    background: none;
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

const StyledFieldSet = styled.fieldset`
    position: absolute;
    padding: 0 19px;
    margin: 0;
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledLegend = styled.legend`
    width: auto;
    height: 11px;
    display: block;
    padding: 0;
    z-index: 10;
    font-size: 0.8em;
    max-width: ${(props) => (props.active ? "1000px" : "0.01px")};
    text-align: left;
    visibility: hidden;
`;

const StyledIconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    top: 0;
    right: 0;
    min-height: 100%;
    width: 60px;
    border: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: ${({ theme }) => theme.background.primary};
    background: ${({ theme }) => theme.colors.primary};
`;

function TextField(props, ref) {
    const [isActive, setActive] = useState(false);

    const inputRef = useRef(null);

    const handleChange = () => {
        if (
            inputRef.current.value ||
            document.activeElement === inputRef.current
        ) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    return (
        <StyledTextField label={props.label} fullWidth={props.fullWidth}>
            {props.label ? (
                <StyledLabel active={isActive}>
                    <Text>{props.label}</Text>
                </StyledLabel>
            ) : null}
            <StyledTextFieldBase
                ref={ref}
                onChange={handleChange}
                onFocus={handleChange}
                onBlur={handleChange}
            >
                <StyledInputBase
                    ref={inputRef}
                    disabled={props.disabled}
                    name={props.name}
                    type={props.type}
                    {...props}
                />
                {props.icon ? (
                    <StyledIconButton>{props.icon}</StyledIconButton>
                ) : null}
                <StyledFieldSet>
                    <StyledLegend active={isActive}>
                        {props.label ? (
                            <span style={{ padding: "0 5px" }}>
                                {props.label}
                            </span>
                        ) : null}
                    </StyledLegend>
                </StyledFieldSet>
            </StyledTextFieldBase>
        </StyledTextField>
    );
}

export default forwardRef(TextField);
