import Hero from "components/Hero";
import { Section } from "styles/globalComponents";

export default function Home() {
    return (
        <>
            <Section>
                <Hero />
            </Section>
            <Section>
                <Hero />
            </Section>
            <Section>
                <Hero />
            </Section>
        </>
    );
}
