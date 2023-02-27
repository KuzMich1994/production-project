import { classNames } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M= 'size_m',
  L= 'size_l',
  XL= 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  buttonSize?: ButtonSize;
}

export function Button({
  className, children, theme, square, buttonSize = ButtonSize.M, ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  const mods: Record<string, boolean> = {
    [s.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className, s[theme], s[buttonSize]])}
      {...props}
    >
      {children}
    </button>
  );
}
