import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { VStack } from '@/shared/ui/stack';
import Skeleton from '@/shared/ui/skeleton/skeleton';
import { useNotifications } from '../../api/notification-api';
import s from './notification-list.module.scss';
import NotificationItem from '../notification-item/notification-item';

interface NotificationListProps {
  className?: string;
}

function NotificationList({ className }: NotificationListProps) {
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(s.notificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(s.notificationList, {}, [className])}
    >
      {
        data?.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))
      }
    </VStack>
  );
}

export default memo(NotificationList);
