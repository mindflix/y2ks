import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    NavContainer,
    Div1,
    Div2,
    NavButtons,
    OpacityBackground,
} from "./HeaderStyles";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import Links from "./Links";
import Drawer from "./Drawer";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import { useMobile } from "hooks/useMobile";
import { linksShop } from "constants/headerShop";
import { linksBlog } from "constants/headerBlog";
import Alert from "./Alert";

export default function Header() {
    const mobile = useMobile();
    const router = useRouter();
    const [links, setLinks] = useState(linksShop);
    const [activeLink, setActiveLink] = useState(false);

    useEffect(() => {
        if (router.asPath.includes("blog")) {
            setLinks(linksBlog);
        } else {
            setLinks(linksShop);
        }
    }, [router]);

    const handleLink = (e) => {
        setActiveLink(e);
    };

    return (
        <NavContainer>
            <Alert />
            <Div1>
                <Logo />
                <NavButtons position="right">
                    {mobile ? null : (
                        <li>
                            <IoPersonOutline size={26} />
                        </li>
                    )}
                    <li>
                        <IoBagHandleOutline size={28} />
                    </li>
                </NavButtons>
            </Div1>
            {!mobile ? (
                <>
                    <Div2>
                        <Links handleLink={handleLink} links={links} />
                        {activeLink ? (
                            <>
                                <MegaMenu activeLink={activeLink} />
                                <OpacityBackground
                                    onMouseEnter={() => setActiveLink(false)}
                                />
                            </>
                        ) : null}
                    </Div2>
                </>
            ) : (
                <Drawer>
                    <Links handleLink={handleLink} links={links} />
                </Drawer>
            )}
        </NavContainer>
    );
}
