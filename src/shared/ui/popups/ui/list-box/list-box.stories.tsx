import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './list-box';

export default {
  title: 'shared/ui/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;

export const Normal = Template.bind({});
Normal.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '321',
      value: '321',
    },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  value: '123',
  direction: 'bottom left',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '321',
      value: '321',
    },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  value: '123',
  direction: 'bottom right',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '321',
      value: '321',
    },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  value: '123',
  direction: 'top left',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '321',
      value: '321',
    },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  value: '123',
  direction: 'top right',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '321',
      value: '321',
    },
  ],
};
