import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import NotificationList from './notification-list';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator/store-decorator';

export default {
  title: 'entities/notification/NotificationList',
  component: NotificationList,
  decorators: [withMock],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Поставь лайк и оставь комментарий 1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Поставь лайк и оставь комментарий 2',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Поставь лайк и оставь комментарий 3',
        },
      ],
    },
  ],
};
