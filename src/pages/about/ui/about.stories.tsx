import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import AboutPage from './about';

export default {
  title: 'pages/about',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
