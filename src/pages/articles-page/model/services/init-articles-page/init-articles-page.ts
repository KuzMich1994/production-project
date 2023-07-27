import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { ArticleSortField, ArticleType } from '@/entities/article';
import { SortOrder } from '@/shared/types';
import { articlesPageActions } from '../../../model/slices/articles-page-slice';
import { fetchArticleList } from '../../../model/services/fetch-article-list/fetch-article-list';
import { getArticlesPageInited } from '../../selectors/articles-page-selectors';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
      const {
        getState,
        dispatch,
      } = thunkAPI;

      const isInited = getArticlesPageInited(getState());

      if (!isInited) {
        const orderFromURL = searchParams.get('order') as SortOrder;
        const sortFromURL = searchParams.get('sort') as ArticleSortField;
        const searchQueryFromURL = searchParams.get('searchQuery');
        const typeFromURL = searchParams.get('type') as ArticleType;

        if (orderFromURL) {
          dispatch(articlesPageActions.setOrder(orderFromURL));
        }
        if (sortFromURL) {
          dispatch(articlesPageActions.setSortType(sortFromURL));
        }
        if (searchQueryFromURL) {
          dispatch(articlesPageActions.setSearchQuery(searchQueryFromURL));
        }
        if (typeFromURL) {
          dispatch(articlesPageActions.setArticleType(typeFromURL));
        }
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleList({}));
      }
    },
  );
