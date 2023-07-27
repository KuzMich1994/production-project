import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '@/app/providers/theme-provider';
import Skeleton from './skeleton';

export default {
  title: 'shared/ui/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: 200,
};

export const Purple = Template.bind({});
Purple.args = {
  width: '100%',
  height: 200,
};

Purple.decorators = [ThemeDecorator(Theme.PURPLE)];

export const Dark = Template.bind({});
Dark.args = {
  width: '100%',
  height: 200,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};
