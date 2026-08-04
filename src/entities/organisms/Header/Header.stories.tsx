import { Header } from "./Header";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { ComponentProps } from "react";
import { StepFunction } from "storybook/internal/csf";

const meta: Meta<typeof Header> = {
    component: Header,
    subcomponents: {
        horizontal: Header.Horizontal,
    }
};
export default meta;

export const Default: StoryObj<typeof Header> = {
    play: ({ args, canvasElement, step }) =>
        footerTests(args, canvasElement, step),
};

const footerTests = async (
    args: ComponentProps<typeof Header>,
    canvasElement: HTMLElement,
    step: StepFunction
) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByTestId(Header.displayName);

    await step(`Check the Footer renders`, async () => {
        await expect(buttonElement).toBeInTheDocument();
    });
};
