import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import s from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage({ className }: ArticleDetailsPageProps): JSX.Element {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(s.articleDetailsPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
}

export default memo(ArticleDetailsPage);
