import { rtkApi } from 'shared/api/rtk-api';
import { NotificationSchema } from '../model/types/notification-schema';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<NotificationSchema[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
