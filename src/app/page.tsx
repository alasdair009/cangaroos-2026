import { Heading, Paragraph } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData();

export default function Home() {
  return (
    <>
        <Heading>Cambridge Cangaroos</Heading>
        <Paragraph>Recreation & competitive trampoline club</Paragraph>
    </>
  );
}
