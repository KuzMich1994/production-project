import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/class-names';
import { ButtonTheme, Button } from '@/shared/ui/button';
import { LoginModal } from '@/features/auth-by-username';
import { getUserAuthData } from '@/entities/user';
import { TextTheme, Text } from '@/shared/ui/text';
import { AppLinkTheme, AppLink } from '@/shared/ui/app-link';
import { HStack } from '@/shared/ui/stack';
import { NotificationButton } from '@/features/notification-button';
import { AvatarDropdown } from '@/features/avatar-dropdown';
import s from './navbar.module.scss';
import { getRouteArticleNew } from '@/shared/const/router';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <Text
          className={s.appName}
          title="Production project"
          theme={TextTheme.INVERTED}
        />
        <HStack gap="16" max justify="between" align="center" className={s.navbar__links}>
          <AppLink
            to={getRouteArticleNew()}
            theme={AppLinkTheme.PRIMARY_INVERTED}
          >
            {t('Создать статью')}
          </AppLink>
          <HStack gap="16" className={s.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
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
