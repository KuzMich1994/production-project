import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/text/text';
import s from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

// 12:54 - 49 lesson

function ArticleDetailsPage({ className }: ArticleDetailsPageProps): JSX.Element {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(s.articleDetailsPage, {}, [className])}>
        <Text title={t('Статья не найдена').toString()} />
      </div>
    );
  }

  return (
    <div className={classNames(s.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
}

export default memo(ArticleDetailsPage);
