import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '@/app/providers/theme-provider';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator/store-decorator';
import Navbar from './navbar';

export default {
  title: 'widget/navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({

})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Authorize = Template.bind({});
Authorize.args = {};
Authorize.decorators = [StoreDecorator({
  user: {
    authData: {
      username: 'user1',
      id: '1',
    },
  },
})];
