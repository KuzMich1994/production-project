import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/class-names/class-names';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../button/button';
import s from './list-box.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { HStack } from '../../../stack';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    items,
    className,
    defaultValue,
    value,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsMods = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={classNames(s.listBox, { [s.readonly]: readonly }, [className, popupCls.popup])}
      >
        <HListBox.Button className={popupCls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(s.options, {}, optionsMods)}>
          {items?.map((item) => (
            <HListBox.Option
              key={nanoid()}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    s.option,
                    {
                      [popupCls.active]: active,
                      [s.selected]: selected,
                      [popupCls.disabled]: item.disabled,
                    },
                  )}
                >
                  {item.content}
                  {selected && '!!!'}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
