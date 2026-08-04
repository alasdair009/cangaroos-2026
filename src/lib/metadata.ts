import { Metadata } from "next";
import { siteOrigin } from "@/lib/domains";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

const xHandle = "camcangaroos";

export const cascNumber = `Ch11911`;
export const address = "Unit P2, Grove Road, Sawston, CB22 3TJ";

export const socialMedia = {
  facebook: "https://www.facebook.com/cangaroos",
  instagram: "https://www.instagram.com/cambridgecangaroos",
  linkedin: "https://uk.linkedin.com/company/cambridge-cangaroos",
  x: `https://x.com/${xHandle}`,
  youtube: "https://www.youtube.com/user/camcangaroos",
};

export const siteName = "Cambridge Cangaroos";
export const myName = "Alasdair Macrae";
export const siteDescription =
  "The Cambridge Cangaroos trampoline club is based in Whittlesford, Cambridge at their purpose built trampoline centre and offers coached sessions for all ages and abilities.";
export const generateMetaData = (
  pageTitle = "Home",
  pageDescription = siteDescription,
  pagePath = "",
  pageImage = `${siteOrigin}/og?title=${pageTitle}`,
  ogType: OpenGraphType = "website",
  ogArticle:
    | {
        publishedTime?: string;
        modifiedTime?: string;
        expirationTime?: string;
        authors?: null | string | URL | Array<string | URL>;
        section?: null | string;
        tags?: null | string | Array<string>;
      }
    | undefined = undefined,
  alternates: object | undefined = undefined
): Metadata => {
  return {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(`${siteOrigin}/${pagePath}`),
    authors: { name: myName },
    alternates: {
      canonical: `${siteOrigin}/${pagePath}`,
      ...alternates,
    },
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      images: pageImage,
      description: pageDescription,
      url: `${siteOrigin}/${pagePath}`,
      siteName: siteName,
      type: ogType,
      ...ogArticle,
    },
    facebook: {
      appId: "300843999928273",
    },
    twitter: {
      site: xHandle,
      card: "summary_large_image",
      images: pageImage,
      title: `${pageTitle} | ${siteName}`,
      description: pageDescription,
    },
    // verification: {
    //   google: "vCDInKApeebRzehtS7SHeh9W-s40E09dUeHozKRSRHs",
    //   other: { "msvalidate.01": "0BE65EA398167BA7055ED2FEE79A4C7A" },
    // },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: ogArticle
      ? {
          "twitter:label1": "Written by",
          "twitter:data": myName,
          "twitter:label2": "Tagged under",
          "twitter:data2": `${ogArticle.tags}`,
        }
      : undefined,
  };
};

export const generateOEmbedUrl = (pagePath: string) => {
  return {
    "application/json+oembed": `${siteOrigin}/api/oembed?url=${encodeURIComponent(`${siteOrigin}/${pagePath}`)}&format=json`,
  };
};
