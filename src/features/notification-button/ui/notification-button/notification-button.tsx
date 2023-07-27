import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/class-names/class-names';
import Icon from '@/shared/ui/icon/icon';
import NotificationsIcon from '@/shared/assets/icons/notifications-20-20.svg';
import { NotificationList } from '@/entities/notification';
import { Popover } from '@/shared/ui/popups';
import Button, { ButtonTheme } from '@/shared/ui/button/button';
import Drawer from '@/shared/ui/drawer/drawer';
import s from './notification-button.module.scss';

interface NotificationButtonProps {
  className?: string;
}

function NotificationButton(props: NotificationButtonProps) {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onToggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const trigger = (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleDrawer}
    >
      <Icon Svg={NotificationsIcon} inverted />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={classNames(s.notifications, {}, [className])} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer onClose={onToggleDrawer} isOpen={isOpen}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
}

export default memo(NotificationButton);
