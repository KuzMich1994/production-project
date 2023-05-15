import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import Text, { TextSize, TextTheme } from './text';

export default {
  title: 'shared/ui/text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'text',
  text: 'text text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'text',
  text: 'text text',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'text',
  text: 'text text',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'text',
  text: 'text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Title = Template.bind({});
Title.args = {
  title: 'text',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'text',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextElement = Template.bind({});
TextElement.args = {
  text: 'text text',
};

export const TextElementDark = Template.bind({});
TextElementDark.args = {
  text: 'text text',
};
TextElementDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextL = Template.bind({});
TextL.args = {
  title: 'text',
  text: 'text text',
  size: TextSize.L,
};
