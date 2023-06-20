import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { articlesPageActions } from '../../../model/slices/articles-page-slice';
import { fetchArticleList } from '../../../model/services/fetch-article-list/fetch-article-list';
import { getArticlesPageInited } from '../../selectors/articles-page-selectors';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
      const {
        getState,
        dispatch,
      } = thunkAPI;

      const isInited = getArticlesPageInited(getState());

      if (!isInited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleList({}));
      }
    },
  );
