import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import AddCommentForm from './add-comment-form';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action('onSendComment'),
};

Normal.decorators = [
  StoreDecorator({
    addCommentForm: {
      text: '123',
    },
  }),
];
