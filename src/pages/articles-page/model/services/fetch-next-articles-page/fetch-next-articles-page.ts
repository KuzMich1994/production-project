import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { articlesPageActions } from '../../../model/slices/articles-page-slice';
import { fetchArticleList } from '../../../model/services/fetch-article-list/fetch-article-list';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../../selectors/articles-page-selectors';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
      const {
        getState,
        dispatch,
      } = thunkAPI;

      const hasMore = getArticlesPageHasMore(getState());
      const page = getArticlesPageNumber(getState());
      const isLoading = getArticlesPageIsLoading(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticleList({}));
      }
    },
  );
