import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CurrencySelect from './currency-select';

export default {
  title: 'entities/currencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
