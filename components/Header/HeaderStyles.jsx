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
    opacity: 0.98;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.background.gray};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.background.primary};
    @media (max-width: 1224px) {
        padding: 4px 16px;
    }
`;

export const Div1 = styled.div`
    display: flex;
    max-width: 1280px;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 1224px) {
        padding-top: 10px;
        width: 100%;
    }
`;

export const Div2 = styled.div`
    z-index: 999;
    width: 100%;
    height: 100%;
`;

export const NavButtons = styled.ul`
    display: flex;
    z-index: 999;
    align-items: center;
    height: 48px;
    margin: 0 12px;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 48px;
        min-height: 48px;
        cursor: pointer;
    }
    @media (max-width: 1224px) {
        margin: 0;
    }
`;

export const OpacityBackground = styled.div`
    position: absolute;
    top: 200px;
    width: 100%;
    opacity: 0.6;
    height: 100vh;
    background-color: black;
`;
