import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import ProfilePage from 'pages/profile-page/ui/profile-page';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/stories.jpg';

export default {
  title: 'pages/profile-page',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.RUSSIA,
      currency: Currency.RUB,
      city: 'Dmitrov',
      avatar,
      lastName: 'Kuzmichev',
      first: 'Sergey',
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.RUSSIA,
      currency: Currency.RUB,
      city: 'Dmitrov',
      avatar,
      lastName: 'Kuzmichev',
      first: 'Sergey',
    },
  },
})];
