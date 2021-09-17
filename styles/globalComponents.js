import styled from "styled-components";
import px2vw from "utils/px2vw";

export const Section = styled.div`
    margin-top: ${(props) => props.theme.breakpoints[props.space] / 20}px;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    max-width: ${(props) => props.theme.breakpoints[props.maxWidth]}px;
    max-height: 100%;
`;

export const Paper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: center;
    align-items: center;
    padding: 48px ${px2vw(64)};
    border-radius: ${(props) => (props.square ? "" : "12px")};
    background: ${({ theme }) => theme.background.primary};
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const Box = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    padding: 16px 0;
    grid-template-columns: ${(props) =>
        props.columns ? `repeat(${props.columns}, 1fr)` : ""};
    grid-gap: 16px;
    ${(props) => {
        const bkp = Object.keys(props).filter(
            (i) => props.theme.breakpoints[i]
        );
        const css = [];
        if (bkp) {
            bkp.forEach((e) =>
                css.push(`@media (max-width: ${props.theme.breakpoints[e]}px) {
                grid-template-columns: repeat(${props[e]}, 1fr)
            }`)
            );
        }
        css.reverse();
        return css;
    }}
`;
