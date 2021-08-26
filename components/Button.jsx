import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 6px 20px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    z-index: 4;
    background: ${({ theme }) => theme.background.primary};
    cursor: pointer;
    outline: 0;
    transform: translate(0px, -3px);
    position: relative;
    transition: color 0.25s ease-in-out;
    transition: background 0.25s ease-in-out;
    &::after {
        z-index: -100;
        pointer-events: none;
        position: absolute;
        transition: 0.25s ease-in-out;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        content: "";
        left: 4px;
        top: 4px;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        border-right: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover {
        &::after {
            opacity: 0;
            transform: translate(-4px, -4px);
        }
    }
`;

const StyledIcon = styled.div`
    display: flex;
    padding-right: 6px;
`;

function Button(props) {
    return (
        <StyledButton {...props}>
            {props.icon ? <StyledIcon>{props.icon}</StyledIcon> : null}
            {props.children}
        </StyledButton>
    );
}

export default Button;
