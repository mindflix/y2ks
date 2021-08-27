import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 6px 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    z-index: 4;
    background: ${({ theme }) => theme.background.primary};
    cursor: pointer;
    z-index: 100;
    outline: 0;
    transform: translate(0px, -3px);
    position: relative;
    transition: color 0.25s ease-in-out;
    transition: background 0.25s ease-in-out;
    @media (max-width: 1224px) {
        margin: auto;
    }
    &::after {
        z-index: -100;
        pointer-events: none;
        position: absolute;
        transition: 0.25s ease-in-out;
        content: "";
        left: 2px;
        bottom: -6px;
        width: 100%;
        height: 3px;
        border-left: 2px solid ${({ theme }) => theme.colors.primary};
        border-right: 2px solid ${({ theme }) => theme.colors.primary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &::before {
        z-index: -100;
        pointer-events: none;
        position: absolute;
        transition: 0.25s ease-in-out;
        content: "";
        right: -6px;
        top: 2px;
        width: 3px;
        height: 100%;
        border-right: 2px solid ${({ theme }) => theme.colors.primary};
        border-top: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover {
        &::after {
            opacity: 0;
            transform: translate(-4px, -4px);
        }
        &::before {
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
