import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/class-names/class-names';
import s from './avatar.module.scss';
import { AppImage } from '../app-image';
import AvatarStub from '../../assets/icons/user-avatar-stub.svg';
import { Skeleton } from '../../ui/skeleton';
import { Icon } from '../../ui/icon';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export function Avatar({
  className, src, size = 100, alt,
}: AvatarProps) {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <AppImage
      fallback={<Skeleton width={size} height={size} border="50%" />}
      errorFallback={<Icon Svg={AvatarStub} width={size} height={size} />}
      src={src}
      className={classNames(s.avatar, mods, [className])}
      style={styles}
      alt={alt}
    />
  );
}
