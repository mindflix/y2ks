import { useState, useEffect } from "react";
import theme from "styles/theme";

export const useMobile = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= theme.breakpoints.md) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        handleSize();
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return mobile;
};
