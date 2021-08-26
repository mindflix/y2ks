import Image from "next/image";
import styled from "styled-components";
import heroBg from "public/images/section1.jpg";

const HeroBg = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export default function Hero() {
    return (
        <HeroBg>
            <Image src={heroBg} objectFit="cover"></Image>
        </HeroBg>
    );
}
