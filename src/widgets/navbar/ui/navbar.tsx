import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import Text, { TextTheme } from 'shared/ui/text/text';
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link';
import { RoutePath } from 'shared/config/route-config/route-config';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <Text
          className={s.appName}
          title="Production project App"
          theme={TextTheme.INVERTED}
        />
        <div className={classNames(s.navbar__links)}>
          <AppLink
            to={RoutePath.article_create}
            theme={AppLinkTheme.PRIMARY_INVERTED}
            className={s.navbar__link}
          >
            {t('Создать статью')}
          </AppLink>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onLogout}
            className={s.navbar__link}
          >
            {t('Выйти')}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__links)}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onShowModal}
        >
          {t('Войти')}
        </Button>
      </div>
      {
        isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )
      }
    </header>
  );
}

export default memo(Navbar);
