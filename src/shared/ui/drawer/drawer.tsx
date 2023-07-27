import {
  memo, PropsWithChildren, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { useTheme } from '@/app/providers/theme-provider';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/animation-provider';
import Overlay from '../overlay/overlay';
import s from './drawer.module.scss';
import { Portal } from '../portal/portal';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

function DrawerContent(props: PropsWithChildren<DrawerProps>) {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const { theme } = useTheme();
  const {
    className,
    children,
    onClose,
    isOpen,
  } = props;

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(s.drawer, {}, [className, theme, 'app-drawer'])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={s.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
}

function DrawerAsync(props: PropsWithChildren<DrawerProps>) {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return (
    <DrawerContent {...props} />
  );
}

function Drawer(props: PropsWithChildren<DrawerProps>) {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
}

export default Drawer;
