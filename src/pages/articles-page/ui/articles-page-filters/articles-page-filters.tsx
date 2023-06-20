import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/article';
import { articlesPageActions } from 'pages/articles-page/model/slices/articles-page-slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import Card from 'shared/ui/card/card';
import Input from 'shared/ui/input/input';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from 'pages/articles-page/model/services/fetch-article-list/fetch-article-list';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articles-page-selectors';
import s from './articles-page-filters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

function ArticlesPageFilters({ className }: ArticlesPageFiltersProps): JSX.Element {
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const searchQuery = useSelector(getArticlesPageSearch);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const fetchData = useCallback(() => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSortType(newSort));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearchQuery(newSearch));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(s.articlesPageFilters, {}, [className])}>
      <div className={s.sortContainer}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={s.search}>
        <Input
          placeholder={t('Поиск').toString()}
          value={searchQuery}
          onChange={onChangeSearch}
        />
      </Card>
    </div>
  );
}

export default memo(ArticlesPageFilters);
