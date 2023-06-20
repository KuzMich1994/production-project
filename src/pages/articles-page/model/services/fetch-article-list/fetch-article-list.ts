import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from '../../selectors/articles-page-selectors';

export interface FetchArticleListProps {
  replace?: boolean;
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
      const limit = getArticlesPageLimit(getState());
      const sort = getArticlesPageSort(getState());
      const order = getArticlesPageOrder(getState());
      const searchQuery = getArticlesPageSearch(getState());
      const page = getArticlesPageNumber(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            q: searchQuery,
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
