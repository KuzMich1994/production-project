import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useSelector } from 'react-redux';
import Page from 'shared/ui/page/page';
import {
  fetchNextArticlesPage,
} from 'pages/articles-page/model/services/fetch-next-articles-page/fetch-next-articles-page';
import { initArticlesPage } from '../../model/services/init-articles-page/init-articles-page';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articles-page-selectors';
import s from './articles-page.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articles-page-slice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

export function ArticlesPage({ className }: ArticlesPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  // lesson 56 26:03

  const onLoadNextPart = useCallback(() => {
    if (!isLoading) {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch, isLoading]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(s.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
