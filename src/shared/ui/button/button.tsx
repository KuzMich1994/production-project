import {classNames} from 'shared/lib/class-names/class-names';
import s from './button.module.scss';
import {ButtonHTMLAttributes, PropsWithChildren} from 'react';

export enum ThemeButton {
  CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({className, children, theme, ...props}: PropsWithChildren<ButtonProps>): JSX.Element {

  return (
    <button
      className={classNames(s.button, {}, [className, s[theme]])}
      {...props}
    >
      {children}
    </button>
  );
}