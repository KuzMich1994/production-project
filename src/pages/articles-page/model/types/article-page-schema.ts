import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;
  order: SortOrder,
  sort: ArticleSortField,
  search: string;
}
