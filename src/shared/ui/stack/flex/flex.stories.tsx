import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './flex';

export default {
  title: 'shared/ui/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  gap: '8',
  direction: 'column',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const AlignStart = Template.bind({});
AlignStart.args = {
  direction: 'column',
  align: 'start',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
  direction: 'column',
  align: 'end',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  direction: 'column',
  align: 'center',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
  direction: 'row',
  justify: 'start',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  direction: 'row',
  justify: 'end',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  direction: 'row',
  justify: 'center',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
  direction: 'row',
  justify: 'between',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};
