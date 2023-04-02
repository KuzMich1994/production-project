import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
}
