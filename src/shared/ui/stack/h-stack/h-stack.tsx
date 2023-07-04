import { PropsWithChildren } from 'react';
import Flex, { FlexProps } from '../flex/flex';

type HStackProps = Omit<PropsWithChildren<FlexProps>, 'direction'>

function HStack(props: HStackProps): JSX.Element {
  return (
    <Flex direction="row" {...props} />
  );
}

export default HStack;
