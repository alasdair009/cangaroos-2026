import type { LinkProps } from "./types";
import { isExternalDomain } from "@/lib/domains";
import newTabIcon from "../../design-tokens/assets/new-tab-icon.svg";
import Image from "next/image";
import NextLink from "next/link"
// import { Link as ViewTransitionLink } from "next-view-transitions";
import styles from "./Link.module.css";
import { CSSProperties } from "react";
import { lineHeights } from "@/styles/tokens";

/**
 * Link to a new path or url.
 */
export function Link({
  hoverFrame = false,
  children,
  href,
  lines,
  style,
  className,
  ...rest
}: LinkProps) {
  const isExternalURL = isExternalDomain(href);

  return (
    // <ViewTransitionLink
      <NextLink
      className={`${className} ${styles.root} ${lines ? styles.clamp : ""}`}
      href={href}
      target={isExternalURL ? "_blank" : "_self"}
      rel={isExternalURL ? "noopener" : undefined}
      data-testid={Link.displayName}
      style={
        {
          ...style,
          "--line-height": lineHeights.p,
          "--number-of-lines": lines,
        } as CSSProperties
      }
      {...rest}
    >
      {children ? children : href}
      {isExternalURL && (
        <Image
          className={styles.newTabIcon}
          src={newTabIcon}
          title="Third party site, opens in a new tab."
          alt="Icon to represent this opens in a new tab"
        />
      )}
    {/*</ViewTransitionLink>*/}
      </NextLink>
  );
}
Link.displayName = "Link";