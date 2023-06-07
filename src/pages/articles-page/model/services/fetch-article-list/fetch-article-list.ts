import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import { getArticlesPageLimit } from '../../selectors/articles-page-selectors';

export interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkAPI;
      const { page = 1 } = props;
      const limit = getArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
