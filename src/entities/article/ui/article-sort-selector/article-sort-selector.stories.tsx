import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleSortSelector from './article-sort-selector';

export default {
  title: 'entities/article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
