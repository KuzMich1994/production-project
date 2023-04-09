import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link';

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './sidebar-item.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

function SidebarItem({ item, collapsed }: SidebarItemProps): JSX.Element {
  const { t } = useTranslation();

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
