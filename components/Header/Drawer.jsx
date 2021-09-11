import { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import { IoPersonOutline } from "react-icons/io5";
import Button from "components/Button";

const StyledDrawer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.9rem 1rem;
    width: 100vw;
    height: 100vh;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ isOpen, theme }) =>
        isOpen ? theme.background.primary : null};
`;

export default function Drawer({ children }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledDrawer isOpen={isOpen}>
            <Hamburger size={24} rounded toggle={setOpen} toggled={isOpen} />
            {isOpen ? (
                <>
                    {children}
                    <Button icon={<IoPersonOutline size={24} />}>
                        Votre compte
                    </Button>
                </>
            ) : null}
        </StyledDrawer>
    );
}
