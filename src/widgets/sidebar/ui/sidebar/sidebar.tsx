import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/stack';
import s from './sidebar.module.scss';
import SidebarItem from '../sidebar-item/sidebar-item';
import { getSidebarItems } from '../../model/selectors/get-sidebar-items';

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prevState) => !prevState);
  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      collapsed={collapsed}
      key={item.path}
      item={item}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <aside data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
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
      <VStack role="navigation" gap="8" className={s.navLinks}>
        {
          itemsList
        }
      </VStack>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
}

export default memo(Sidebar);
