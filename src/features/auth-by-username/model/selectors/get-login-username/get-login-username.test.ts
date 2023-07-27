import { StateSchema } from '@/app/providers/store-provider';
import { getLoginUsername } from './get-login-username';

describe('getLoginIsLoadingTest', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
