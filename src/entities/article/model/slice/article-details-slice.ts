import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetch-article-by-id/fetch-article-by-id';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/article-details-schema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const articleDetailsSlice = createSlice({
  initialState,
  name: 'ARTICLE_DETAILS',
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.error = undefined;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
