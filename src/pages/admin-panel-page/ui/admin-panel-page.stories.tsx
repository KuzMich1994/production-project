import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPanelPage from './admin-panel-page';

export default {
  title: 'shared/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
