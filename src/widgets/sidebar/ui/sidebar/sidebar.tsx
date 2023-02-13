import { classNames } from 'shared/lib/class-names/class-names';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { Button } from 'shared/ui/button/button';
import s from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prevState) => !prevState);

  return (
    <div className={classNames(s.sidebar, { [s.sidebar_collapsed]: collapsed }, [className])}>
      <Button onClick={handleToggle}>toggle</Button>
      <div className={s.sidebar__Switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
