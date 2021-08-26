import styled from "styled-components";
import Hamburger from "hamburger-react";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { sidebar } from "utils/animation";
import Links from "./Links";
import Button from "components/Button";

const StyledDrawer = styled.div`
    position: absolute;
    left: 0;
    padding: 0 1rem;
    width: 100vw;
    height: 100vh;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.background.primary};
`;

export default function Drawer({ isOpen, setOpen }) {
    return (
        <StyledDrawer as={motion.div} variants={sidebar}>
            <Hamburger size={26} rounded toggle={setOpen} toggled={isOpen} />
            <Button
                style={{ margin: "2.5rem 2rem 0" }}
                icon={<IoPersonOutline size={24} />}
            >
                Votre compte
            </Button>
            <Links />
        </StyledDrawer>
    );
}
