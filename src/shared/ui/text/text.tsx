import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import s from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size-s',
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
  hasElementTitle?: boolean;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};
export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    hasElementTitle,
    'data-testid': dataTestid = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [s[align]]: true,
    [s[size]]: true,
  };

  return (
    <div className={classNames(s.text, mods, [className, s[theme]])}>
      {
        title
        && (
          <HeaderTag
            title={hasElementTitle ? title : undefined}
            className={s.title}
            data-testid={`${dataTestid}.Header`}
          >
            {title}
          </HeaderTag>
        )
      }
      {
        text && (
          <p
            title={hasElementTitle ? text : undefined}
            className={s.text}
            data-testid={`${dataTestid}.Paragraph`}
          >
            {text}
          </p>
        )
      }
    </div>
  );
});
