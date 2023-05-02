import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import s from './articles-page.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export function ArticlesPage({ className }: ArticlesPageProps): JSX.Element {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(s.articlesPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
}

export default memo(ArticlesPage);
