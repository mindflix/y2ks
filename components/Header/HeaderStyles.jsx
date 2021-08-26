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
    padding-top: 12px;
    align-items: center;
    border-top: 10px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.background.primary};
    @media (max-width: 1224px) {
        padding: 4px 16px;
    }
`;

export const Div1 = styled.div`
    display: flex;
    min-width: 90%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        width: 100%;
    }
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


