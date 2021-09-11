import styled from "styled-components";

const StyledButton = styled.button`
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    background: #000;
    color: #fff;
    z-index: 1;
    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background: #fff;
        transition: all 0.3s ease;
    }
    &:hover {
        color: #000;
    }
    &:hover:after {
        left: 0;
        width: 100%;
    }
    &:active {
        top: 2px;
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
