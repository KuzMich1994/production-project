import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentList from './comment-list';

export default {
  title: 'entities/comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'admin' },
      text: '123',
    },
    {
      id: '2',
      user: { id: '2', username: 'vasyan' },
      text: '321',
    },
  ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  comments: [],
  isLoading: true,
};
