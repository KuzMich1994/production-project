import { classNames } from 'shared/lib/class-names/class-names';
import { MutableRefObject, PropsWithChildren, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll/use-infinite-scroll';
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

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    containerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={containerRef}
      className={classNames(s.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
}

export default Page;
