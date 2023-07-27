import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '@/app/providers/theme-provider';
import Input from './input';

export default {
  title: 'shared/ui/input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'insert',
};

export const InputDark = Template.bind({});
InputDark.args = {
  placeholder: 'insert',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
