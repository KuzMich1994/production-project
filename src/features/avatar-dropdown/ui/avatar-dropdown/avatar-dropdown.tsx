import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Avatar } from '@/shared/ui/avatar/avatar';
import { RoutePath } from '@/shared/config/route-config/route-config';
import { Dropdown } from '@/shared/ui/popups';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import s from './avatar-dropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

function AvatarDropdown({ className }: AvatarDropdownProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(s.avatarDropdown, {}, [className])}
      direction="bottom left"
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Профиль'),
          href: `${RoutePath.profile}${authData.id}`,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
    />
  );
}

export default memo(AvatarDropdown);
