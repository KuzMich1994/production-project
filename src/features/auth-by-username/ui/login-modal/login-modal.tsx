import { Suspense } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Modal } from '@/shared/ui/modal';
import { Loader } from '@/shared/ui/loader';
import { LoginFormAsync } from '../login-form/login-form.async';

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
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
}
