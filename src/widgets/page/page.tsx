import { classNames } from 'shared/lib/class-names/class-names';
import {
  MutableRefObject, PropsWithChildren, UIEvent, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll/use-infinite-scroll';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { scrollSaveActions } from 'features/scroll-save/model/slice/scroll-save-slice';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { useSelector } from 'react-redux';
import { getScrollPositionByPath } from 'features/scroll-save';
import { StateSchema } from 'app/providers/store-provider';
import { useThrottle } from 'shared/lib/hooks/use-throttle/use-throttle';
import s from './page.module.scss';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

function Page(props: PropsWithChildren<PageProps>): JSX.Element {
  const {
    className,
    children,
    onScrollEnd,
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
    <section
      ref={containerRef}
      className={classNames(s.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {
        onScrollEnd && (<div ref={triggerRef} className={s.trigger} />)
      }
    </section>
  );
}

export default Page;
