import { classNames } from 'shared/lib/class-names/class-names';
import React, { PropsWithChildren, useRef, useState } from 'react';
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

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  };

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  return (
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
  );
}
