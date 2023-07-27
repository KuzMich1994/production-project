import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsPageHeader from './article-details-page-header';

export default {
  title: 'pages/articleDetails/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
