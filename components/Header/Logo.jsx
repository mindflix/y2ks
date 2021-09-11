import styled from "styled-components";
import Link from "next/link";

const NavLogo = styled.div`
    z-index: 999;
    letter-spacing: 0.4rem;
    margin-right: 32px;
    cursor: pointer;
    transition: color 0.25s ease-out;
    font-size: 2.8rem;
    font-weight: 600;
    @media (max-width: 1024px) {
        font-size: 2rem;
    }
`;

export default function Logo() {
    return (
        <Link href="/">
            <NavLogo>Y2KS</NavLogo>
        </Link>
    );
}
