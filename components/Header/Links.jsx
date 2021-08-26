import styled from "styled-components";
import Link from "next/link";
import px2vw from "utils/px2vw";
import { links } from "constants/constants";
import { linksVariants, itemsVariants } from "utils/animation";
import { motion } from "framer-motion";

const NavLinks = styled.ul`
    position: relative;
    display: flex;
    z-index: 998;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: ${px2vw(8)};
    margin-bottom: ${px2vw(14)};
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    li {
        padding: 0.5rem 1.6rem;
        @media (max-width: 1224px) {
            padding: 1rem 1.4rem;
            margin-right: auto;
        }
    }
    @media (max-width: 1224px) {
        margin-left: 1.4rem;
        margin-right: auto;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 1rem 0;
        flex-direction: column;
        ::before {
            content: "";
            position: absolute;
            left: 0;
            top: 5%;
            height: 91%;
            width: 2px;
            background: ${({ theme }) => theme.colors.primary};
            border-radius: 8px;
        }
    }
`;

export default function Links() {
    return (
        <NavLinks as={motion.ul} variants={linksVariants}>
            {links.map((link, index) => (
                <motion.li
                    variants={itemsVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                >
                    <Link href={link.href}>
                        <a>{link.name}</a>
                    </Link>
                </motion.li>
            ))}
        </NavLinks>
    );
}
