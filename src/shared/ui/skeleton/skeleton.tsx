import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import s from './skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    border,
    width,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      style={styles}
      className={classNames(s.skeleton, {}, [className])}
    />
  );
});
