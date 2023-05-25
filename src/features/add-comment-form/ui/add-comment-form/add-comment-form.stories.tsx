import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentForm from './add-comment-form';

export default {
  title: 'shared/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};