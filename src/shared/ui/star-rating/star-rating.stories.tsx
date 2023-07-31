import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './star-rating';

export default {
  title: 'shared/ui/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
