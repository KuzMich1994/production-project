import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/class-names/class-names';
import { nanoid } from '@reduxjs/toolkit';
import { DropdownDirection } from 'shared/types/ui';
import Button from '../button/button';
import s from './list-box.module.scss';
import { HStack } from '../stack/index';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': s.optionsTopLeft,
  'bottom left': s.optionsBottomLeft,
  'top right': s.optionsTopRight,
  'bottom right': s.optionsBottomRight,
};

function ListBox(props: ListBoxProps) {
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
        className={classNames(s.listBox, { [s.readonly]: readonly }, [className])}
      >
        <HListBox.Button className={s.trigger}>
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
                      [s.active]: active,
                      [s.selected]: selected,
                      [s.disabled]: item.disabled,
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
}

export default memo(ListBox);
