import styled from "styled-components";
import Link from "next/link";
import px2vw from "utils/px2vw";

const NavLinks = styled.ul`
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
    margin: ${px2vw(8)} 0 ${px2vw(6)};
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
        padding: 1.2rem;
        font-size: 1rem;
    }
    li {
        padding: 0.5rem 1.6rem;
        @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
            padding: 1rem;
        }
    }
    a:hover {
        font-weight: bold;
    }
`;

export default function Links({ links, handleLink, isHovered }) {
    return (
        <NavLinks>
            {links.map((link, index) => (
                <li key={index} onMouseOver={() => handleLink(link)}>
                    <Link as={link.as} href={link.href}>
                        <a onMouseEnter={() => isHovered(true)}>{link.name}</a>
                    </Link>
                </li>
            ))}
        </NavLinks>
    );
}

const StyledSubLinks = styled.ul`
    display: flex;
    width: 100%;
    grid-column: 2 / 3;
    padding-top: ${px2vw(10)};
    flex-direction: column;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin-bottom: auto;
    li {
        padding: 0.5rem 0;
    }
    a:hover {
        color: ${({ theme }) => theme.colors.highlight};
    }
`;

export function SubLinks({ activeLink }) {
    return (
        <StyledSubLinks>
            {activeLink.categories.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}>
                        <a>{link.name}</a>
                    </Link>
                </li>
            ))}
        </StyledSubLinks>
    );
}
