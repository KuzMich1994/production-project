import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Page from './page';

export default {
  title: 'widget/page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
