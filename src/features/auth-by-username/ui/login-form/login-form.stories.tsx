import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator/store-decorator';
import LoginForm from './login-form';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/login-form',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
  },
})];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
    error: 'Error',
  },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
    isLoading: true,
  },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
LoginFormDark.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
  },
})];
