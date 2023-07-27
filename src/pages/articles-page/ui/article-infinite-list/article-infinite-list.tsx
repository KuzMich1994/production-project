import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/article';
import Text from '@/shared/ui/text/text';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articles-page-selectors';
import { getArticles } from '../../model/slices/articles-page-slice';

interface ArticleInfiniteListProps {
  className?: string;
}

function ArticleInfiniteList({ className }: ArticleInfiniteListProps): JSX.Element {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <Text text={t('Ошибка при загрузке статей').toString()} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
}

export default memo(ArticleInfiniteList);
