import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import s from './overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

function Overlay(props: OverlayProps): JSX.Element {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={classNames(s.overlay, {}, [className])} />
  );
}

export default memo(Overlay);
