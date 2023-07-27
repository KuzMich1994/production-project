import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationItem from './notification-item';

export default {
  title: 'entities/notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  notification: {
    title: 'Уведомление',
    id: '1',
    description: 'Поставь лайк и оставь комментарий',
  },
};
