import {
  MutableRefObject, PropsWithChildren, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/class-names';
import { useInfiniteScroll } from '@/shared/lib/hooks/use-infinite-scroll/use-infinite-scroll';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/use-initial-effect';
import { getScrollPositionByPath, scrollSaveActions } from '@/features/scroll-save';
import { StateSchema } from '@/app/providers/store-provider';
import { useThrottle } from '@/shared/lib/hooks/use-throttle/use-throttle';
import s from './page.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
  className?: string;
  onScrollEnd?: () => void;
}

function Page(props: PropsWithChildren<PageProps>): JSX.Element {
  const {
    className,
    children,
    onScrollEnd,
    'data-testid': dataTestid,
  } = props;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    containerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    containerRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
  }, 500);

  return (
    <main
      data-testid={dataTestid ?? 'page'}
      ref={containerRef}
      className={classNames(s.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {
        onScrollEnd && (<div ref={triggerRef} className={s.trigger} />)
      }
    </main>
  );
}

export default Page;
