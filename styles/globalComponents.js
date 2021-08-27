import styled from "styled-components";
import px2vw from "utils/px2vw";

export const Section = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin: 0 ${px2vw(250)} 0;
    max-width: 100%;
    max-height: 100%;

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

export const Paper = styled.div`
    padding: ${px2vw(24)};
    border-radius: 16px;
`;

export const Wrap = styled.div`
    padding: 1.5rem;
    max-width: 100%;

    @media (max-width: 1024px) {
        padding: 0.5rem;
    }
`;
