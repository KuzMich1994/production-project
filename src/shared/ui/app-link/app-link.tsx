import { Link, LinkProps } from 'react-router-dom';
import { memo, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_INVERTED = 'primaryInverted',
}

interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo(({
  className, children, to, theme = AppLinkTheme.PRIMARY, ...props
}: PropsWithChildren<AppLinkProps>) => (
  <Link
    to={to}
    className={classNames(s.appLink, {}, [className, s[theme]])}
    {...props}
  >
    {children}
  </Link>
));
