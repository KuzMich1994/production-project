import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { DropdownDirection } from 'shared/types/ui';
import AppLink from '../app-link/app-link';
import s from './dropdown.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': s.optionsTopLeft,
  'bottom left': s.optionsBottomLeft,
  'top right': s.optionsTopRight,
  'bottom right': s.optionsBottomRight,
};

function Dropdown(props: DropdownProps) {
  const {
    className,
    trigger,
    items,
    direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(s.dropdown, {}, [className])}>
      <Menu.Button className={s.button}>
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
                className={classNames(s.item, { [s.active]: active })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item as={Fragment} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          })
        }
      </Menu.Items>
    </Menu>
  );
}

export default memo(Dropdown);
