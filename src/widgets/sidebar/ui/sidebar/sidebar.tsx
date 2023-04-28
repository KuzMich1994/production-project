import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import { SidebarItemsList } from '../../model/items';
import s from './sidebar.module.scss';
import SidebarItem from '../sidebar-item/sidebar-item';

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prevState) => !prevState);

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      collapsed={collapsed}
      key={item.path}
      item={item}
    />
  )), [collapsed]);

  return (
    <div data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        className={s.collapsedButton}
        square
        buttonSize={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.navLinks}>
        {
          itemsList
        }
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
}

export default memo(Sidebar);
