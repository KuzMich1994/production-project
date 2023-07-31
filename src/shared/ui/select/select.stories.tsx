import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './select';

export default {
  title: 'shared/ui/avatar',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'select',
  name: 'select',
  options: [
    { value: '123', content: '123' },
    { value: '321', content: '321' },
  ],
};
