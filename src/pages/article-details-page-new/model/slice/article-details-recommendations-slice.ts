import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import { fetchArticleRecommendations } from '../services/fetch-article-recommendations/fetch-article-recommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/article-details-recommendations-schema';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.error = undefined;
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  actions: articleDetailsRecommendationsActions,
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
