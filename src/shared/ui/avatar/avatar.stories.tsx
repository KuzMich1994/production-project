import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './avatar';
import avatar from './stories.jpg';

export default {
  title: 'shared/ui/avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: avatar,
  alt: '',
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: avatar,
  alt: '',
};
