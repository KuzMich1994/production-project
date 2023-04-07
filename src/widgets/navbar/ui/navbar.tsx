import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { useAppDispatch } from 'app/providers/store-provider';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): JSX.Element {
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
      <div className={classNames(s.navbar, {}, [className])}>
        <div className={classNames(s.navbar__links)}>
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__links)}>
        <Button
          theme={ButtonTheme.CLEAR}
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
    </div>
  );
}
