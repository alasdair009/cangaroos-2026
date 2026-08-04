import { Footer } from "./Footer";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { ComponentProps } from "react";
import { StepFunction } from "storybook/internal/csf";

const meta: Meta<typeof Footer> = {
    component: Footer,
};
export default meta;

export const Default: StoryObj<typeof Footer> = {
    play: ({ args, canvasElement, step }) =>
        footerTests(args, canvasElement, step),
};

const footerTests = async (
    args: ComponentProps<typeof Footer>,
    canvasElement: HTMLElement,
    step: StepFunction
) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByTestId(Footer.displayName);

    await step(`Check the Footer renders`, async () => {
        await expect(buttonElement).toBeInTheDocument();
    });
};
