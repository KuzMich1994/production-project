import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import s from './input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

function Input(props: InputProps): JSX.Element {
  const {
    onChange,
    value,
    type = 'text',
    className,
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      if (inputRef) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [s.readonly]: readonly,
  };

  return (
    <div className={classNames(s.inputContainer, mods, [className])}>
      {
        placeholder && (
          <div className={s.placeholder}>
            {`${placeholder}>`}
          </div>
        )
      }
      <div className={s.caretContainer}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeHandler}
          className={s.input}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {
          isCaretVisible && (
            <span
              className={s.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )
        }
      </div>
    </div>
  );
}

export default memo(Input);
