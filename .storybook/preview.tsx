import type { Preview } from '@storybook/nextjs-vite';

import { mswLoader } from 'msw-storybook-addon/csf3';

import "../src/styles/global.css";
import { mswHandlers } from './msw-handlers';
import {ViewportMap} from "storybook/viewport";
import {breakpoints, device} from "../src/styles/tokens";
import {Breakpoint} from "../src/styles/styles";
import {withThemeByClassName} from "@storybook/addon-themes";

const customViewports: ViewportMap = {};

(Object.keys(breakpoints) as Array<keyof typeof breakpoints>).forEach(
    (breakpointKey) => {
      if (breakpoints[breakpointKey] > 0) {
        customViewports[breakpointKey] = {
          name: `${breakpointKey} (${device[breakpointKey as Breakpoint] ? device[breakpointKey as Breakpoint] : `min-width: ${breakpoints[breakpointKey]}px`})`,
          styles: {
            height: "100%",
            width: `${breakpoints[breakpointKey]}px`,
          },
          type:
              breakpoints[breakpointKey] > breakpoints.medium
                  ? "desktop"
                  : "mobile",
        };
      }
    }
);

const preview: Preview = {
  decorators: [
  ],
  loaders: [mswLoader()],
  async beforeEach({ msw }) {
    msw.use(...mswHandlers);
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: customViewports,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  tags: ['autodocs'],
};

export default preview;
