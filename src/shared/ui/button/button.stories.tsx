import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '@/app/providers/theme-provider';
import Button, { ButtonSize, ButtonTheme } from './button';

export default {
  title: 'shared/ui/button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  buttonSize: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  buttonSize: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  buttonSize: ButtonSize.XL,
};

export const ButtonM = Template.bind({});
ButtonM.args = {
  children: 'Button medium',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  buttonSize: ButtonSize.M,
};

export const ButtonL = Template.bind({});
ButtonL.args = {
  children: 'Button Large',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  buttonSize: ButtonSize.L,
};

export const ButtonXL = Template.bind({});
ButtonXL.args = {
  children: 'Button Extra Large',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  buttonSize: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
