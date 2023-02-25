import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../src/app/providers/theme-provider';
import { RouteDecorator } from '../../src/shared/config/storybook/route-decorator/route-decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
