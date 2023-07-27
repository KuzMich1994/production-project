import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import s from './avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export function Avatar({
  className, src, size, alt,
}: AvatarProps): JSX.Element {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      className={classNames(s.avatar, mods, [className])}
      style={styles}
      alt={alt}
    />
  );
}
