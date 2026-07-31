import {Breakpoint, ColorKey, FontSizes, HeadingTypes, SizeKey} from "./styles";
import { toCssVars } from "./style-helpers";
import { CSSProperties } from "react";


export const sizes: Record<SizeKey, number> = {
    s2: 2,
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    s64: 64,
    s72: 72,
    s80: 80,
    s96: 96,
    s128: 128,
    s192: 192,
    s256: 256,
    s512: 512,
    s1024: 1024,
};

export const globalSizes: Record<string, number> = {
    // Maximum width that inputs should be set to.
    inputMaxWidth: 480,

    // Maximum width that text should be confined to.
    textMaxWidth: 1200,

    // Maximum width that content should extend to.
    contentMaxWidth: 1600,

    // Maximum width decorative elements can stretch to on the screen.
    decorationMaxWidth: 3440,
    headerHeight: 48,
};

export const breakpoints: Record<Breakpoint, number> = {
    base: 0,
    min: 320,
    xsmall: 640,
    small: 768,
    medium: 1024,
    large: globalSizes.textMaxWidth,
    xlarge: globalSizes.contentMaxWidth,
    wide: globalSizes.decorationMaxWidth,
};

export const device: Record<
    Breakpoint,
    `min-width: ${(typeof breakpoints)[Breakpoint]}px`
> = {
    base: `min-width: ${breakpoints.base}px`,
    min: `min-width: ${breakpoints.min}px`,
    xsmall: `min-width: ${breakpoints.xsmall}px`,
    small: `min-width: ${breakpoints.small}px`,
    medium: `min-width: ${breakpoints.medium}px`,
    large: `min-width: ${breakpoints.large}px`,
    xlarge: `min-width: ${breakpoints.xlarge}px`,
    wide: `min-width: ${breakpoints.wide}px`,
};

export const colors: Record<
    ColorKey,
    Exclude<CSSProperties["color"], undefined>
> = {
    blackHandle: "#181818",
    bluePush: "#588ad9",
    blueWedge: "#004ba5",
    whiteNylon: "#faf9f6",
};

export const borders: Record<
    string,
    Exclude<CSSProperties["border"], undefined>
> = {
    thinBlue: `1px solid ${colors.bluePush}`,
};

export const fontFamilies: Record<
    `font${string}`,
    Exclude<CSSProperties["fontFamily"], undefined>
> = {
    fontArial: "Arial, Helvetica, sans-serif",
};

export const fontSizes: Record<
    FontSizes,
    Exclude<CSSProperties["fontSize"], undefined>
> = {
    small: sizes.s12,
    medium: sizes.s16,
    mlarge: sizes.s24,
    large: sizes.s32,
    xlarge: sizes.s40,
    xxlarge: sizes.s64,
};

export const headingSizes: Record<
    HeadingTypes,
    Exclude<CSSProperties["fontSize"], undefined>
> = {
    h1: fontSizes.xlarge,
    h2: fontSizes.large,
    h3: fontSizes.mlarge,
    h4: fontSizes.mlarge,
    h5: fontSizes.mlarge,
    h6: fontSizes.mlarge,
};

export const lineHeights: Record<
    HeadingTypes | "p",
    Exclude<CSSProperties["lineHeight"], undefined>
> = {
    h1: "1.4em",
    h2: "1.3em",
    h3: "1.2em",
    h4: "1.2em",
    h5: "1.2em",
    h6: "1.2em",
    p: "1.3em",
};

export const fontWeights: Record<"regular" | "bold" | "black", number> = {
    regular: 400,
    bold: 700,
    black: 900,
};

export const zIndexes: Record<"maxContent" | "dialog", number> = {
    maxContent: 999998,
    dialog: 999999,
};

const radiiInt: Record<
    `r${number}`,
    Exclude<CSSProperties["borderRadius"], undefined>
> = {
    r2: 2,
    r4: 4,
    r8: 8,
    r12: 12,
};

const radiiPer: Record<
    "round",
    Exclude<CSSProperties["borderRadius"], undefined>
> = {
    round: "50%",
};

export const radii: Record<
    keyof typeof radiiInt | keyof typeof radiiPer,
    Exclude<CSSProperties["borderRadius"], undefined>
> = {
    ...radiiInt,
    ...radiiPer,
};

export const allTokens = {
    ...toCssVars(borders, "border"),
    ...toCssVars(colors, "color"),
    ...toCssVars(fontFamilies, "font-family"),
    ...toCssVars(fontSizes, "font-size", { unit: "rem" }),
    ...toCssVars(fontWeights, "font-weight"),
    ...toCssVars(headingSizes, "heading-size", { unit: "rem" }),
    ...toCssVars(lineHeights, "line-height"),
    ...toCssVars(radiiInt, "radii", { unit: "rem" }),
    ...toCssVars(radiiPer, "radii"),
    ...toCssVars(sizes, "size", { unit: "rem" }),
    ...toCssVars(globalSizes, "global", { unit: "rem" }),
    ...toCssVars(breakpoints, "breakpoint", { unit: "px" }),
    ...toCssVars(zIndexes, "z-index"),
};