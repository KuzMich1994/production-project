import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import Text, { TextSize } from '@/shared/ui/text/text';
import { ArticleList, ArticleView } from '@/entities/article';
import { VStack } from '@/shared/ui/stack';
import { useGetArticleRecommendationsList } from '../../api/article-recommendations-api';
import s from './article-recommendations-list.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

function ArticleRecommendationsList(props: ArticleRecommendationsListProps): JSX.Element | null {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data, error } = useGetArticleRecommendationsList(3);

  if (isLoading || error || !data) {
    return null;
  }

  return (
    <VStack gap="8" max className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем').toString()}
      />
      <ArticleList
        target="_blank"
        articles={data}
        isLoading={isLoading}
        view={ArticleView.TILE}
        className={s.articleRecommendationsList}
      />
    </VStack>
  );
}

export default memo(ArticleRecommendationsList);
