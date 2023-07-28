import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={classNames(s.overlay, {}, [className])} />
  );
});
