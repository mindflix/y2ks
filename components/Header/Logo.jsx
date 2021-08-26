import styled from "styled-components";
import Link from "next/link";

const NavLogo = styled.div`
    font-family: "Permanent Marker";
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f09,
        0 0 82px #f09, 0 0 92px #f09, 0 0 102px #f09, 0 0 151px #f09;
    position: absolute;
    z-index: 999;
    letter-spacing: 0.3rem;
    cursor: pointer;
    transition: color 0.25s ease-out;
    font-size: 2.8rem;
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
