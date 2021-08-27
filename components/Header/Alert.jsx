import styled from "styled-components";

const Copyright = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 10px;
    line-height: 8px;
    text-align: right;
    padding-right: 10px;
    font-size: 8px;
    color: ${({ theme }) => theme.background.primary};
    background: ${({ theme }) => theme.colors.primary};
    @media (max-width: 1224px) {
        font-size: 6px;
        line-height: 10px;
    }
`;

export default function Alert() {
    return <Copyright>version 0.1</Copyright>;
}
