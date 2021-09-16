import styled from "styled-components";
import px2vw from "utils/px2vw";

export const Section = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;
`;

export const Container = styled.div`
    position: relative;
    margin: auto;
    max-width: ${(props) => props.theme.breakpoints[props.maxWidth]}px;
    max-height: 100%;
`;

export const Paper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${px2vw(48)};
    border-radius: 12px;
    background: ${({ theme }) => theme.background.primary};
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const Box = styled.div`
    width: 100%;
    margin: 0.2rem;
`;
