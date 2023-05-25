import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { ThunkConfig } from 'app/providers/store-provider';
import { Comment } from 'entities/comment';
import { getArticleDetailsData } from 'entities/article';
import { getCommentFormText } from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (_, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkAPI;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());
      const text = getCommentFormText(getState());

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

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
