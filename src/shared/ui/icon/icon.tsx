import { classNames } from 'shared/lib/class-names/class-names';
import React, { memo, ReactElement, SVGProps } from 'react';
import s from './icon.module.scss';

interface IconProps {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
}

function Icon({ className, Svg }: IconProps): JSX.Element {
  return (
    <Svg className={classNames(s.icon, {}, [className])} />
  );
}

export default memo(Icon);
