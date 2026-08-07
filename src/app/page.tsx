import {Heading, Hero, Link, Paragraph} from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import {globalSizes, sizes} from "@/styles/tokens";
import clubLogo from "../entities/design-tokens/assets/logo.svg";
import Image from "next/image";

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
        <section style={{display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", margin: "0 auto", maxWidth: globalSizes.contentMaxWidth, paddingBlock: sizes.s40}}>
            <figure style={{alignItems: "center", display: "flex", gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 3, justifyContent: "center", margin: 0}}>
                <Image src={clubLogo} alt="" width={150} height={150} />
            </figure>
            <Heading level="h2" align="left" style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2, margin: "0 !important"}}>A club that supports you</Heading>
            <Paragraph style={{gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2}} margin="none" fontSize="mlarge">For first time bouncers to national success, we offer a safe, supportive and fun environment for everyone.</Paragraph>
            <div style={{alignItems: "center", display: "flex", gridColumnStart: 3, gridColumnEnd: 6, gridRowStart: 2, gridRowEnd: 3, justifyContent: "space-between"}}>
                <article style={{alignItems: "center", display: "flex", gap: sizes.s8, justifyContent: "center"}}>
                    <Image src="https://placehold.co/20x20.png" alt="" height="20" width="20" />
                    <Heading as="h3" level="h4" style={{margin: "0 !important"}}>Expert coaching</Heading>
                </article>
                <article style={{alignItems: "center", display: "flex", gap: sizes.s8, justifyContent: "center"}}>
                    <Image src="https://placehold.co/20x20.png" alt="" height="20" width="20" />
                    <Heading  as="h3" level="h4" style={{margin: "0 !important"}}>All ages and abilities</Heading>
                </article>
                <article style={{alignItems: "center", display: "flex", gap: sizes.s8, justifyContent: "center"}}>
                    <Image src="https://placehold.co/20x20.png" alt="" height="20" width="20" />
                    <Heading as="h3" level="h4" style={{margin: "0 !important"}}>Safe and supportive</Heading>
                </article>
                <article style={{alignItems: "center", display: "flex", gap: sizes.s8, justifyContent: "center"}}>
                    <Image src="https://placehold.co/20x20.png" alt="" height="20" width="20" />
                    <Heading as="h3" level="h4" style={{margin: "0 !important"}}>Pathway to succeed</Heading>
                </article>
            </div>
        </section>
    </>
  );
}
