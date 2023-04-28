import { classNames, Mods } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
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
}

function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    buttonSize = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: otherProps.disabled,
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
}

export default memo(Button);
