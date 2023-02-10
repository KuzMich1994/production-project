import {classNames} from 'shared/lib/class-names/class-names';
import s from './sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/theme-switcher';
import {LangSwitcher} from 'widgets/lang-switcher';

interface SidebarProps {
  className?: string;
}

export function Sidebar({className}: SidebarProps): JSX.Element {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prevState) => !prevState);

  return (
    <div className={classNames(s.sidebar, {[s.sidebar_collapsed]: collapsed}, [className])}>
      <button onClick={handleToggle}>toggle</button>
      <div className={s.sidebar__Switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  );
}