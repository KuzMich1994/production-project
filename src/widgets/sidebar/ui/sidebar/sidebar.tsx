import { classNames } from 'shared/lib/class-names/class-names';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { RoutePath } from 'shared/config/route-config/route-config';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import s from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => setCollapsed((prevState) => !prevState);

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
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(s.link)}
          to={RoutePath.main}
        >
          <HomeIcon className={s.linkIcon} />
          <span className={s.linkText}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(s.link)}
          to={RoutePath.about}
        >
          <AboutIcon className={s.linkIcon} />
          <span className={s.linkText}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
}
