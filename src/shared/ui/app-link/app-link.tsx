import { classNames } from 'shared/lib/class-names/class-names';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import s from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;
}

export function AppLink({
  className, children, to, theme = AppLinkTheme.PRIMARY, ...props
}: PropsWithChildren<AppLinkProps>): JSX.Element {
  return (
    <Link
      to={to}
      className={classNames(s.appLink, {}, [className, s[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
}
