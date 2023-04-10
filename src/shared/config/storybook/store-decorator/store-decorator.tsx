import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { loginReducer } from 'features/auth-by-username/model/slice/login-slice';
import { profileReducer } from 'entities/profile';
import { ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
