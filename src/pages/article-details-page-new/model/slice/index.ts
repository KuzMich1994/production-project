import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './article-details-recommendations-slice';
import { articleDetailsCommentsReducer } from './article-details-comments-slice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
