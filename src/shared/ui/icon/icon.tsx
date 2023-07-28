import React, { memo, ReactElement, SVGProps } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    inverted,
    ...otherProps
  } = props;

  return (
    <Svg
      className={classNames(inverted ? s.inverted : s.icon, {}, [className])}
      {...otherProps}
    />
  );
});
