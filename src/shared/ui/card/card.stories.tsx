import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from 'shared/ui/text/text';
import Card from './card';

export default {
  title: 'shared/ui/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="test" text="text" />,
};
