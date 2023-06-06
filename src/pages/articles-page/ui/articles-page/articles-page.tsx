import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useSelector } from 'react-redux';
import { fetchArticleList } from '../../model/services/fetch-article-list/fetch-article-list';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articles-page-selectors';
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
  const error = useSelector(getArticlesPageError);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticleList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducerList={reducers}>
      <div className={classNames(s.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
