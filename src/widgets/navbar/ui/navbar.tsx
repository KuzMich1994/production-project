import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__links)}>
        <AppLink theme={AppLinkTheme.PRIMARY} className={classNames(s.navbar__link)} to="/">{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} className={classNames(s.navbar__link)} to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
}
