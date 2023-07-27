import React, { memo, ReactElement, SVGProps } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './icon.module.scss';

interface IconProps {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  inverted?: boolean;
}

function Icon({ className, Svg, inverted }: IconProps): JSX.Element {
  return (
    <Svg className={classNames(inverted ? s.inverted : s.icon, {}, [className])} />
  );
}

export default memo(Icon);
