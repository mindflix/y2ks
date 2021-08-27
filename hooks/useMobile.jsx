import { useState, useEffect } from "react";

export const useMobile = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 1224) {
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
