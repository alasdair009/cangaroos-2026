import { Link } from "./Link";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {expect, userEvent, waitFor, within} from "storybook/test";
import {ComponentProps} from "react";
import {Button} from "@/entities";
import {StepFunction} from "storybook/internal/csf";

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    href: "#",
    children: "Go to page",
  },
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  play: async ({ args, canvasElement, step }) => linkTests(args, canvasElement, step)
};

const linkTests = async (
    args: ComponentProps<typeof Link>,
    canvasElement: HTMLElement,
    step: StepFunction
) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByTestId(Link.displayName);

  await step(`Check the link renders`, async () => {
    await expect(linkElement).toBeInTheDocument();
    await expect(linkElement).toHaveTextContent(`${args.children}`);
  });

  await step(`Check href and props`, async () => {
    await userEvent.click(canvas.getByTestId(Button.displayName));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());

    await expect(linkElement).toHaveAttribute("href", args.href);
  });
};