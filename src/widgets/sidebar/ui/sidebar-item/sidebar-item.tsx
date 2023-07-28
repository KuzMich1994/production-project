import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/class-names/class-names';
import { AppLinkTheme, AppLink } from '@/shared/ui/app-link';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './sidebar-item.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

function SidebarItem({ item, collapsed }: SidebarItemProps): JSX.Element | null {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY_INVERTED}
      className={classNames(s.sidebarItem, { [s.collapsed]: collapsed })}
      to={item.path}
    >
      <item.Icon className={s.linkIcon} />
      <span className={s.linkText}>{t(item.text)}</span>
    </AppLink>
  );
}

export default memo(SidebarItem);
