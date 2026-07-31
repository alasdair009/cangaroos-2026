import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { ComponentProps } from "react";
import { StepFunction } from "storybook/internal/csf";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: {
      description: "Action to perform when the button is clicked.",
    },
    type: {
      description: "HTML Button type.",
      control: {
        type: "select",
      },
      options: ["button", "reset", "submit"],
    },
    variant: {
      description: "Visual variant of the button.",
      control: {
        type: "select",
      },
      options: ["standard"],
    },
  },
  args: {
    children: "Button",
    disabled: false,
    onClick: fn(),
    variant: "standard",
    type: "button",
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  play: ({ args, canvasElement, step }) =>
    buttonTests(args, canvasElement, step),
};

const buttonTests = async (
  args: ComponentProps<typeof Button>,
  canvasElement: HTMLElement,
  step: StepFunction
) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByTestId(Button.displayName);

  await step(`Check the button renders`, async () => {
    await expect(buttonElement).toBeInTheDocument();
    await expect(buttonElement).toHaveTextContent(`${args.children}`);
  });

  await step(`Check actions and props`, async () => {
    await userEvent.click(canvas.getByTestId(Button.displayName));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());

    await expect(buttonElement).toHaveAttribute("type", args.type);
    if (args.disabled) {
      await expect(buttonElement).toHaveAttribute("disabled", true);
    } else {
      await expect(buttonElement).not.toHaveAttribute("disabled");
    }
  });
};
