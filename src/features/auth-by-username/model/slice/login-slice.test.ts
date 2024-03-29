import { LoginSchema } from '../types/login-schema';
import { loginActions, loginReducer } from './login-slice';

describe('loginSliceTest', () => {
  test('set test username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(state as LoginSchema, loginActions.setUserName('admin123')))
      .toEqual({ username: 'admin123' });
  });
  test('set test password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
      .toEqual({ password: '12345' });
  });
});
