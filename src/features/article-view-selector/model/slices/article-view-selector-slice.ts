import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleViewSelectorSchema } from '../types/article-view-selector-schema';

const initialState: ArticleViewSelectorSchema = {};

export const ArticleViewSelectorSlice = createSlice({
  name: 'article-view-selector',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const {
  actions: ArticleViewSelectorActions,
} = ArticleViewSelectorSlice;
export const {
  reducer: ArticleViewSelectorReducer,
} = ArticleViewSelectorSlice;
