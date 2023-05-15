import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import s from './articles-page.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export function ArticlesPage({ className }: ArticlesPageProps): JSX.Element {
  return (
    <div className={classNames(s.articlesPage, {}, [className])} />
  );
}

export default memo(ArticlesPage);
