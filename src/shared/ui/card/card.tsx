import { classNames } from 'shared/lib/class-names/class-names';
import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
}

function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(s.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default memo(Card);
