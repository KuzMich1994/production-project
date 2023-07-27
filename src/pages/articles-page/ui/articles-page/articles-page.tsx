import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/class-names';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import Page from '@/widgets/page/page';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/use-initial-effect';
import { initArticlesPage } from '../../model/services/init-articles-page/init-articles-page';
import { fetchNextArticlesPage } from '../../model/services/fetch-next-articles-page/fetch-next-articles-page';
import { getArticlesPageIsLoading } from '../../model/selectors/articles-page-selectors';
import ArticlesPageFilters from '../articles-page-filters/articles-page-filters';
import { articlesPageReducer } from '../../model/slices/articles-page-slice';
import s from './articles-page.module.scss';
import ArticleInfiniteList from '../article-infinite-list/article-infinite-list';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

export function ArticlesPage({ className }: ArticlesPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    if (!isLoading) {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch, isLoading]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(s.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={s.list} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
