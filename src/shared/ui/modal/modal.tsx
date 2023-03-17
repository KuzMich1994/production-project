import { classNames } from 'shared/lib/class-names/class-names';
import React, {
  PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/portal/portal';
import { useTheme } from 'app/providers/theme-provider';
import s from './modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Modal({
  className, children, isOpen, onClose,
}: PropsWithChildren<ModalProps>): JSX.Element {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
    [s[theme]]: true,
  };

  return (
    <Portal>
      <div className={classNames(s.modal, mods, [className])}>
        <div className={s.overlay} onClick={closeHandler}>
          <div
            className={s.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
