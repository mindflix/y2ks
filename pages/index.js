import Hero from "components/Hero";
import { Section } from "styles/globalComponents";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1200], [0, 400]);
    return (
        <>
            <motion.divs>
                <Section>
                    <Hero />
                </Section>
            </motion.divs>
            <motion.div>
                <Section>
                    <Hero />
                </Section>
            </motion.div>
            <motion.div>
                <Section>
                    <Hero />
                </Section>
            </motion.div>
        </>
    );
}
