import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../button/button';
import s from './code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(s.code, {}, [className])}>
      <Button
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
        className={s.copyBtn}
      >
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
