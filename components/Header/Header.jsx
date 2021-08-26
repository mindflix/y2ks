import React, { useState, useEffect, useRef } from "react";
import { NavContainer, Div1, NavButtons } from "./HeaderStyles";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import Links from "./Links";
import Drawer from "./Drawer";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Header() {
    const [isDrawer, setDrawer] = useState(true);
    const [isOpen, setOpen] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 1224) {
                setDrawer(true);
                setOpen(false);
            } else {
                setDrawer(false);
                setOpen(true);
            }
        };
        handleSize();
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return (
        <NavContainer
            as={motion.nav}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <Div1>
                <Logo />
                <NavButtons position="right">
                    {isDrawer ? null : (
                        <li>
                            <IoPersonOutline size={26} />
                        </li>
                    )}
                    <li>
                        <IoBagHandleOutline size={28} />
                    </li>
                </NavButtons>
            </Div1>
            {!isDrawer ? (
                <Links />
            ) : (
                <Drawer isOpen={isOpen} setOpen={setOpen} />
            )}
        </NavContainer>
    );
}
