import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleViewSelector from './article-view-selector';

export default {
  title: 'entities/article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
