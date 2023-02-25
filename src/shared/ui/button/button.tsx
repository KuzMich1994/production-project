import { classNames } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({
  className, children, theme, ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button
      type="button"
      className={classNames(s.button, {}, [className, s[theme]])}
      {...props}
    >
      {children}
    </button>
  );
}
