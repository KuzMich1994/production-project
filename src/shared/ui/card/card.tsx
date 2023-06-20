import { classNames } from 'shared/lib/class-names/class-names';
import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  theme?: CardTheme;
}

function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(s.card, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default memo(Card);
