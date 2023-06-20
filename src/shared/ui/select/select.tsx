import { classNames, Mods } from 'shared/lib/class-names/class-names';
import { ChangeEvent, useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import s from './select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  name?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

function Select<T extends string>(props: SelectProps<T>): JSX.Element {
  const {
    className,
    label,
    name,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(() => options?.map((option) => (
    <option key={nanoid()} aria-label={option.value} value={option.value} className={s.option}>{option.content}</option>
  )), [options]);

  const mods: Mods = {
    [s.readonly]: readonly,
  };

  return (
    <div className={classNames(s.container, mods, [className])}>
      {
        label && (
          <label htmlFor={name} className={s.label}>
            {`${label}>`}
          </label>
        )
      }
      <select
        disabled={readonly}
        id={name}
        className={s.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
}

export default Select;
