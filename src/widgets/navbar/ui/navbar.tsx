import { classNames } from 'shared/lib/class-names/class-names';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): JSX.Element {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__links)}>
        <span>/</span>
      </div>
    </div>
  );
}
