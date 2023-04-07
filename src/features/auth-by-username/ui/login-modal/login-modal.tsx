import { classNames } from 'shared/lib/class-names/class-names';
import { Modal } from 'shared/ui/modal/modal';
import { LoginFormAsync } from 'features/auth-by-username/ui/login-form/login-form.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader/loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ className, onClose, isOpen }: LoginModalProps): JSX.Element {
  return (
    <Modal
      lazy
      className={classNames('', {}, [className])}
      onClose={onClose}
      isOpen={isOpen}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
}
