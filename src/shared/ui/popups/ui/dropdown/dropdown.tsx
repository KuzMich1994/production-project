import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/class-names/class-names';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../app-link/app-link';
import s from './dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface DropdownItem {
  content?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}
interface DropdownProps {
  className?: string;
  items?: DropdownItem[];
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className,
    trigger,
    items,
    direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(s.dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(s.menu, {}, menuClasses)}>
        {
          items?.map((item) => {
            const content = ({ active }: {active: boolean}) => (
              <button
                disabled={item.disabled}
                type="button"
                onClick={item.onClick}
                className={classNames(s.item, { [popupCls.active]: active })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item key={nanoid()} as={AppLink} to={item.href} disabled={item.disabled}>
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item key={nanoid()} as={Fragment} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          })
        }
      </Menu.Items>
    </Menu>
  );
});
