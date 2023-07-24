import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './forbidden-page';

export default {
  title: 'shared/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
