import { classNames } from 'shared/lib/class-names/class-names';
import s from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps): JSX.Element {
  return (
    <div className={classNames(s.loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
