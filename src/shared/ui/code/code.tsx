import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import s from './code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

function Code({ className, text }: CodeProps): JSX.Element {
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
}

export default memo(Code);
