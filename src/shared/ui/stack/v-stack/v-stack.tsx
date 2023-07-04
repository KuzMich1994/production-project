import { PropsWithChildren } from 'react';
import Flex, { FlexProps } from '../flex/flex';

type VStackProps = Omit<PropsWithChildren<FlexProps>, 'direction'>

function VStack(props: VStackProps): JSX.Element {
  const {
    align = 'start',
  } = props;

  return (
    <Flex {...props} direction="column" align={align} />
  );
}

export default VStack;
