import styled from "styled-components";

const StyledButton = styled.button`
    min-width: 130px;
    padding: 0 18px;
    height: 48px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    z-index: 1;
    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        bottom: 0;
        z-index: -1;
        background: #fff;
        transition: all 0.3s ease;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    &:hover:after {
        height: 100%;
    }
    &:active {
        top: 1px;
    }
`;

const StyledIcon = styled.div`
    display: flex;
    padding-right: 8px;
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
