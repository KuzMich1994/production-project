import { classNames } from 'shared/lib/class-names/class-names';
import { memo, PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/theme-provider';
import Overlay from '../overlay/overlay';
import s from './drawer.module.scss';
import { Portal } from '../portal/portal';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

function Drawer(props: PropsWithChildren<DrawerProps>) {
  const {
    className,
    isOpen,
    onClose,
    children,
  } = props;

  const { theme } = useTheme();

  return (
    <Portal>
      <div className={classNames(s.drawer, { [s.opened]: isOpen }, [className, theme, 'app-drawer'])}>
        <Overlay onClick={onClose} />
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
