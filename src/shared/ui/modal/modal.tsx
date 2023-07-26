import { classNames, Mods } from 'shared/lib/class-names/class-names';
import React, {
  MutableRefObject, PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/theme-provider';
import Overlay from '../overlay/overlay';
import { Portal } from '../portal/portal';
import s from './modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export function Modal({
  className, children, isOpen, onClose, lazy,
}: PropsWithChildren<ModalProps>): JSX.Element | null {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
        <Overlay onClick={closeHandler} />
        <div
          className={s.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
