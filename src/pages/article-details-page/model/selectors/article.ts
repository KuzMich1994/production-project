import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { getArticleDetailsData } from 'entities/article';

export const getCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
