import React, { PropsWithChildren } from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import Overlay from '../overlay/overlay';
import { Portal } from '../portal/portal';
import s from './modal.module.scss';
import { useModal } from '@/shared/lib/hooks/use-modal/use-modal';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export function Modal({
  className, children, isOpen, onClose, lazy,
}: PropsWithChildren<ModalProps>) {
  const { theme } = useTheme();
  const { isClosing, close, isMounted } = useModal({
    onClose, lazy, isOpen, animationDelay: 300,
  });

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(s.modal, mods, [className, theme, 'app-modal'])}>
        <Overlay onClick={close} />
        <div
          className={s.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
