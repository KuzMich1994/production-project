import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getLoginIsLoading } from './get-login-is-loading';

describe('getLoginIsLoadingTest', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
