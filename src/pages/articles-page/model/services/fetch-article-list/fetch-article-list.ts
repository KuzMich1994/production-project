import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Article, ArticleType } from '@/entities/article';
import { addQueryParams } from '@/shared/lib/url/add-query-params/add-query-params';
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
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
      const type = getArticlesPageType(getState());

      try {
        addQueryParams({
          sort,
          order,
          searchQuery,
          type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            q: searchQuery,
            type: type !== ArticleType.ALL ? type : undefined,
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
