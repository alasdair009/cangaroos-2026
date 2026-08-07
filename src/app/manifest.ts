import { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/metadata";
import { colors } from "@/styles/tokens";
import { siteOrigin } from "@/lib/domains";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    display_override: ["window-controls-overlay"],
    id: `${siteOrigin}`,
    start_url: "/",
    display: "standalone",
    background_color: colors.blackHandle,
    lang: "en-GB",
    scope: "/",
    theme_color: colors.bluePush,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
