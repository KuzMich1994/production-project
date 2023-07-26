import { classNames, Mods } from 'shared/lib/class-names/class-names';
import { memo, PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/theme-provider';
import { useModal } from 'shared/lib/hooks/use-modal/use-modal';
import Overlay from '../overlay/overlay';
import s from './drawer.module.scss';
import { Portal } from '../portal/portal';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

function Drawer(props: PropsWithChildren<DrawerProps>) {
  const {
    className,
    isOpen,
    onClose,
    children,
    lazy,
  } = props;

  const { theme } = useTheme();

  const { isClosing, close, isMounted } = useModal({
    onClose, isOpen, animationDelay: 300,
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
      <div className={classNames(s.drawer, mods, [className, theme, 'app-drawer'])}>
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

export default memo(Drawer);
