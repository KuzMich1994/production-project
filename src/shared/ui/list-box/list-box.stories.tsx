import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListBox from './list-box';

export default {
  title: 'shared/ui/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
