import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '@/app/providers/theme-provider';
import { Modal } from './modal';

export default {
  title: 'shared/ui/modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa impedit, libero necessitatibus nihil non odio quasi unde. Consectetur.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa impedit, libero necessitatibus nihil non odio quasi unde. Consectetur.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
