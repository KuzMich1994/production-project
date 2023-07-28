import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { CardTheme, Card } from '@/shared/ui/card';
import { Text } from '@/shared/ui/text';
import { AppLink } from '@/shared/ui/app-link';
import { NotificationSchema } from '../../model/types/notification-schema';
import s from './notification-item.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: NotificationSchema;
}

function NotificationItem(props: NotificationItemProps) {
  const { className, notification } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(s.notificationItem, {}, [className])}
    >
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification.href) {
    return (
      <AppLink className={s.notificationLink} to={notification.href} target="_blank">
        {content}
      </AppLink>
    );
  }

  return (
    content
  );
}

export default memo(NotificationItem);
