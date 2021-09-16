import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";
import Hamburger from "hamburger-react";
import Link from "next/link";
import {
    NavContainer,
    Div1,
    Div2,
    NavButtons,
    OpacityBackground,
} from "./HeaderStyles";
import {
    IoBagHandle,
    IoBagHandleOutline,
    IoPerson,
    IoPersonOutline,
} from "react-icons/io5";
import Links from "./Links";
import Drawer from "./Drawer";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import { useMobile } from "hooks/useMobile";
import { linksShop } from "constants/headerShop";
import { linksBlog } from "constants/headerBlog";
import Alert from "./Alert";
import TextField from "components/TextField";
import IconButton from "components/IconButton";
import Button from "components/Button";

export default function Header() {
    const mobile = useMobile();
    const router = useRouter();
    const [links, setLinks] = useState(linksShop);
    const [activeLink, setActiveLink] = useState(null);
    const [isOpen, setOpen] = useState(false);

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

    const handleOpen = (e) => {
        if (activeLink) {
            setOpen(e);
        }
    };

    return (
        <NavContainer>
            <Alert />
            <Div1>
                {mobile ? (
                    <NavButtons>
                        <Hamburger
                            size={24}
                            rounded
                            toggle={setOpen}
                            toggled={isOpen}
                        />
                    </NavButtons>
                ) : null}
                <Logo />
                {!mobile ? (
                    <TextField
                        size="small"
                        style={{ width: 500 }}
                        icon={<IoSearchOutline size={24} />}
                        label="Rechercher un produit, une marque..."
                    />
                ) : null}
                <NavButtons>
                    {!mobile ? (
                        <Link href="/account">
                            <li>
                                <IconButton
                                    icon={<IoPersonOutline size={24} />}
                                    iconHover={<IoPerson size={24} />}
                                />
                            </li>
                        </Link>
                    ) : null}
                    <li>
                        <IconButton
                            icon={<IoBagHandleOutline size={24} />}
                            iconHover={<IoBagHandle size={24} />}
                        />
                    </li>
                </NavButtons>
            </Div1>
            {!mobile ? (
                <>
                    <Div2 onMouseLeave={() => handleOpen(false)}>
                        <Links
                            isHovered={handleOpen}
                            handleLink={handleLink}
                            links={links}
                        />
                        {isOpen ? <MegaMenu activeLink={activeLink} /> : null}
                    </Div2>
                    {isOpen ? <OpacityBackground /> : null}
                </>
            ) : (
                <Drawer isOpen={isOpen}>
                    <Links links={links} />
                    <Link href="/account">
                        <Button icon={<IoPersonOutline size={24} />}>
                            Votre compte
                        </Button>
                    </Link>
                </Drawer>
            )}
        </NavContainer>
    );
}
