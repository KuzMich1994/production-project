import { classNames } from 'shared/lib/class-names/class-names';
import s from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme,
}

export function Text({
  className, text, title, theme = TextTheme.PRIMARY,
}: TextProps): JSX.Element {
  return (
    <div className={classNames(s.text, {}, [className, s[theme]])}>
      {
        title && <p className={s.title}>{title}</p>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  );
}
