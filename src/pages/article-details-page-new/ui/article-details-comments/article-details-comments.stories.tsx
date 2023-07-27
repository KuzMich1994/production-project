import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsComments from './article-details-comments';

export default {
  title: 'pages/articleDetails/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
