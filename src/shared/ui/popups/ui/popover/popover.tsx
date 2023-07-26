import { memo, PropsWithChildren, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './popover.module.scss';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

function Popover(props: PropsWithChildren<PopoverProps>) {
  const {
    className, trigger, direction = 'bottom right', children,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];
  return (
    <HPopover as="div" className={classNames(s.popover, {}, [className, popupCls.popup])}>
      <HPopover.Button className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(s.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}

export default memo(Popover);
