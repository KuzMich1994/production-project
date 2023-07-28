import { PropsWithChildren } from 'react';
import { FlexProps, Flex } from '../flex/flex';

type HStackProps = Omit<PropsWithChildren<FlexProps>, 'direction'>

export const HStack = (props: HStackProps) => (
  <Flex direction="row" {...props} />
);
