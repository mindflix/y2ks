import styled from "styled-components";
import Image from "next/image";
import px2vw from "utils/px2vw";
import { SubLinks } from "./Links";

const StyledMegaMenu = styled.div`
    position: absolute;
    display: grid;
    z-index: 999;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: ${px2vw(350)};
    background: ${({ theme }) => theme.background.primary};
`;

const Div1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    margin-left: auto;
    grid-column: 3;
`;

export default function MegaMenu({ activeLink }) {
    return (
        <StyledMegaMenu>
            <SubLinks activeLink={activeLink} />
            <Div1>
                <Image
                    src={activeLink.img}
                    layout="fill"
                    quality={25}
                    unoptimized
                    objectFit="cover"
                    objectPosition="center"
                />
            </Div1>
        </StyledMegaMenu>
    );
}
