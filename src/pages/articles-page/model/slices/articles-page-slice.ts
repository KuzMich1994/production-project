import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { Article, ArticleView } from 'entities/article';
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/local-storage';
import { ArticlesPageSchema } from '../types/article-page-schema';
import { fetchArticleList } from '../services/fetch-article-list/fetch-article-list';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    view: ArticleView.TILE,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
