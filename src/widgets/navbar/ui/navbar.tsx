import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import { useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import Text, { TextTheme } from 'shared/ui/text/text';
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link';
import { RoutePath } from 'shared/config/route-config/route-config';
import Dropdown from 'shared/ui/dropdown/dropdown';
import { Avatar } from 'shared/ui/avatar/avatar';
import { HStack } from 'shared/ui/stack';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

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

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <Text
          className={s.appName}
          title="Production project App"
          theme={TextTheme.INVERTED}
        />
        <HStack gap="16" align="center" className={s.navbar__links}>
          <AppLink
            to={RoutePath.article_create}
            theme={AppLinkTheme.PRIMARY_INVERTED}
          >
            {t('Создать статью')}
          </AppLink>
          <Dropdown
            direction="bottom left"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
              ...(isAdminPanelAvailable ? [{
                content: t('Админка'),
                href: RoutePath.admin_panel,
              }] : []),
              {
                content: t('Профиль'),
                href: `${RoutePath.profile}${authData.id}`,
              },
              {
                content: t('Выйти'),
                onClick: onLogout,
              },
            ]}
          />
        </HStack>
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
