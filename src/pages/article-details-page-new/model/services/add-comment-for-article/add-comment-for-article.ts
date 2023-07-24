import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { ThunkConfig } from 'app/providers/store-provider';
import { Comment } from 'entities/comment';
import { getArticleDetailsData } from 'entities/article';
import { fetchCommentsByArticleId } from '../fetch-comments-by-article-id/fetch-comments-by-article-id';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
        dispatch,
      } = thunkAPI;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          articleId: article?.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
