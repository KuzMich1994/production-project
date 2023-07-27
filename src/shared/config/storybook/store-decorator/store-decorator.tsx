import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { loginReducer } from '@/features/auth-by-username/model/slice/login-slice';
import { profileReducer } from '@/features/editable-profile-card';
import { ReducerList } from '@/shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { articleDetailsReducer } from '@/entities/article/model/slice/article-details-slice';
import { addCommentFormReducer } from '@/features/add-comment-form/model/slices/add-comment-form-slice';
import { articleDetailsPageReducer } from '@/pages/article-details-page-new';

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
