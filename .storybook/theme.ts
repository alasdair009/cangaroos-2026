import { create } from 'storybook/theming';
import { colors, radii } from "../src/styles/tokens";

export default create({
  base: 'light',

  colorPrimary: colors.bluePush,
  colorSecondary: colors.blueWedge,

  appBg: colors.whiteNylon,
  appContentBg: colors.whiteNylon,
  appHoverBg: '#f5f5f5',
  appPreviewBg: colors.whiteNylon,
  appBorderColor: '#d9d9d9',
  appBorderRadius: 8,

  fontBase: 'Arial, sans-serif',
  fontCode: 'monospace',

  textColor: '#1f1f1f',
  textInverseColor: '#ffffff',
  textMutedColor: '#666666',

  barTextColor: '#666666',
  barHoverColor: '#1f1f1f',
  barSelectedColor: '#1e88e5',
  barBg: '#ffffff',

  buttonBg: '#f5f5f5',
  buttonBorder: '#d9d9d9',

  booleanBg: '#ebebeb',
  booleanSelectedBg: '#1e88e5',

  inputBg: '#ffffff',
  inputBorder: '#d9d9d9',
  inputTextColor: '#1f1f1f',
  inputBorderRadius: 4,

  brandTitle: 'Cambridge Cangaroos',
  brandUrl: 'https://www.cangaroos.org',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  gridCellSize: 12,
});
