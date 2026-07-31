import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import Home from './page';

const meta = {
  component: Home,
  tags: ['ai-generated'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /welcome to cambridge cangaroos/i }),
    ).toBeVisible();
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', {
      name: /welcome to cambridge cangaroos/i,
    });

    await expect(getComputedStyle(heading).color).toBe('rgb(15, 23, 42)');
  },
};
