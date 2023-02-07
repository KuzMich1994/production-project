import {classNames} from 'shared/lib/class-names/class-names';
import s from './navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/app-link/app-link';

interface NavbarProps {
  className?: string;
}

export function Navbar({className}: NavbarProps): JSX.Element {

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__Links)}>
        <AppLink theme={AppLinkTheme.PRIMARY} className={classNames(s.navbar__Link)} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} className={classNames(s.navbar__Link)} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
}
