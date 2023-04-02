import { classNames } from 'shared/lib/class-names/class-names';
import { Modal } from 'shared/ui/modal/modal';
import { LoginForm } from '../login-form/login-form';
import s from './login-modal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ className, onClose, isOpen }: LoginModalProps): JSX.Element {
  return (
    <Modal
      lazy
      className={classNames(s.loginModal, {}, [className])}
      onClose={onClose}
      isOpen={isOpen}
    >
      <LoginForm />
    </Modal>
  );
}
