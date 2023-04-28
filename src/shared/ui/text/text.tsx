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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme,
  align?: TextAlign,
}

function Text(props: TextProps): JSX.Element {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [s[align]]: true,
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
