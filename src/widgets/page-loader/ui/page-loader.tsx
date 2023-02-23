import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from 'shared/ui/loader/loader';
import s from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps): JSX.Element {
  return (
    <div className={classNames(s.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}
