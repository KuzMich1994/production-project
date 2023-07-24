import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { Article, ArticleType } from 'entities/article';
import ArticleRecommendationsList from './article-recommendations-list';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  user: {
    id: '1',
    avatar: 'https://sun9-14.userapi.com/impg/9iFKRv193rl60zip1cKrz3Kh5HIGAgClpBW9lg/4qOEDoVY3O0.jpg?size=1024x1024&quality=95&sign=99f02934e7028cd616a903dd61fe17cf&type=album',
    username: 'admin',
  },
  img: 'https://itproger.com/img/courses/1476977754.jpg',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [],
};

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      status: 200,
      response: [
        {
          ...article, id: '1',
        },
        {
          ...article, id: '2',
        },
        {
          ...article, id: '3',
        },
      ],
    },
  ],
};
