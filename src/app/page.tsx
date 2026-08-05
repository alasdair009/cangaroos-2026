import { Heading, Hero, Paragraph } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { globalSizes } from "@/styles/tokens";

export const metadata: Metadata = generateMetaData();

export default function Home() {
  return (
    <>
        <Hero>
            <Heading>Cambridge Cangaroos</Heading>
            <Paragraph>Recreation & competitive trampoline club</Paragraph>
        </Hero>
        <nav style={{display: "flex", justifyContent: "space-between", margin: "0 auto", maxWidth: globalSizes.contentMaxWidth}}>
            <article>
                <Heading level="h2">Sessions</Heading>
                <Paragraph>Recreational and competitive sessions for all ages</Paragraph>
            </article>
            <article>
                <Heading level="h2">Competitions</Heading>
                <Paragraph>Enter competions and view results.</Paragraph>
            </article>
            <article>
                <Heading level="h2">Resources</Heading>
            </article>
            <article>
                <Heading level="h2">Contact</Heading>
            </article>
        </nav>
    </>
  );
}
