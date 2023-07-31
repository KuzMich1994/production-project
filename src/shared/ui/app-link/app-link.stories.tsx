import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { AppLink, AppLinkTheme } from './app-link';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/ui/app-link',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'TEXT',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'TEXT',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'TEXT',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'TEXT',
  theme: AppLinkTheme.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
