import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentCard from './comment-card';

export default {
  title: 'entities/comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    text: '123',
    id: '1',
    user: { id: '1', username: 'admin' },
  },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  comment: {
    text: '123',
    id: '1',
    user: { id: '1', username: 'admin' },
  },
  isLoading: true,
};
