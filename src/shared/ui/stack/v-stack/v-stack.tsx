import { PropsWithChildren } from 'react';
import { FlexProps, Flex } from '../flex/flex';

type VStackProps = Omit<PropsWithChildren<FlexProps>, 'direction'>

export const VStack = (props: VStackProps) => {
  const {
    align = 'start',
  } = props;

  return (
    <Flex {...props} direction="column" align={align} />
  );
};
