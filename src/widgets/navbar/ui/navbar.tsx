import { classNames } from 'shared/lib/class-names/class-names';
import { Modal } from 'shared/ui/modal/modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useCallback, useState } from 'react';
import s from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={classNames(s.navbar__links)}>
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onToggleModal}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa impedit, libero necessitatibus nihil non odio quasi unde. Consectetur.
      </Modal>
    </div>
  );
}
