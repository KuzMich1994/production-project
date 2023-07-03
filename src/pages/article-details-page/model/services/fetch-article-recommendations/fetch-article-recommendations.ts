import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (props, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
      } = thunkAPI;

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _limit: 4,
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
