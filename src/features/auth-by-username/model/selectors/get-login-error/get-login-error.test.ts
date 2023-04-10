import { StateSchema } from 'app/providers/store-provider';
import { getLoginError } from './get-login-error';

describe('getLoginErrorTest', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
