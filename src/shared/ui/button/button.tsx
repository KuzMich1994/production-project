import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import s from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline-red',
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
  fullWidth?: boolean;
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    buttonSize = ButtonSize.M,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: otherProps.disabled,
    [s.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className, s[theme], s[buttonSize]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
