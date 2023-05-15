import { classNames, Mods } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import s from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size-m',
  L = 'size-l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

function Text(props: TextProps): JSX.Element {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [s[align]]: true,
    [s[size]]: true,
  };

  return (
    <div className={classNames(s.text, mods, [className, s[theme]])}>
      {
        title && <p className={s.title}>{title}</p>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  );
}

export default memo(Text);
