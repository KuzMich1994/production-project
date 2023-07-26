import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Icon from 'shared/ui/icon/icon';
import NotificationsIcon from 'shared/assets/icons/notifications-20-20.svg';
import { NotificationList } from 'entities/notification';
import { Popover } from 'shared/ui/popups';
import s from './notification-button.module.scss';

interface NotificationButtonProps {
  className?: string;
}

function NotificationButton(props: NotificationButtonProps) {
  const { className } = props;

  return (
    <Popover
      direction="bottom left"
      trigger={(
        <Icon Svg={NotificationsIcon} inverted />
      )}
    >
      <NotificationList className={classNames(s.notifications, {}, [className])} />
    </Popover>
  );
}

export default memo(NotificationButton);
