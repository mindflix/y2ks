import styled from "styled-components";

const Copyright = styled.div`
    top: 0;
    width: 100%;
    height: 10px;
    line-height: 8px;
    text-align: right;
    padding-right: 10px;
    font-size: 8px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 1224px) {
        font-size: 6px;
        line-height: 10px;
    }
`;

export default function Alert() {
    return <Copyright>v0.1</Copyright>;
}
