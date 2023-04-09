import { classNames } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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

function Button({
  className, children, theme, square, buttonSize = ButtonSize.M, ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  const mods: Record<string, boolean> = {
    [s.square]: square,
    [s.disabled]: props.disabled,
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

export default memo(Button);
