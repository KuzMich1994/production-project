import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { LoginForm } from './login-form';

export default {
  title: 'features/login-form',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'insert',
};
Primary.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
  },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
  placeholder: 'insert',
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
LoginFormDark.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: 'asd',
  },
})];
