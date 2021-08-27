import styled from "styled-components";

export const NavContainer = styled.div`
    position: sticky;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.992;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.background.primary};
    @media (max-width: 1224px) {
        padding: 4px 16px;
    }
`;

export const Div1 = styled.div`
    display: flex;
    min-width: 80%;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 1224px) {
        padding-top: 10px;
        width: 100%;
    }
`;

export const Div2 = styled.div`
    width: 100%;
    height: 100%;
`;

export const NavButtons = styled.ul`
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
    height: 48px;
    margin: ${(props) => {
        if (props.position === "left") {
            return "0 auto 0 0";
        }
        if (props.position === "right") {
            return "0 0 0 auto";
        }
    }};
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        cursor: pointer;
    }
`;

export const OpacityBackground = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    opacity: 0.75;
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary};
`;
