import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../button/button';
import { Dropdown } from './dropdown';

export default {
  title: 'shared/ui/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
