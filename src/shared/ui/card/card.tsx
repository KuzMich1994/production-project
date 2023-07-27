import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  theme?: CardTheme;
  fullWidth?: boolean;
}

function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    fullWidth,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(s.card, { [s.fullWidth]: fullWidth }, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default memo(Card);
