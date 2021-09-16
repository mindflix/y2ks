import styled from "styled-components";

const StyledDrawer = styled.div`
    position: relative;
    z-index: 997;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.background.primary};
`;

export default function Drawer(props) {
    return props.isOpen ? <StyledDrawer>{props.children}</StyledDrawer> : null;
}
