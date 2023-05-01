import { StateSchema } from 'app/providers/store-provider';
import { getProfileError } from './get-profile-error';

describe('getProfileErrorTest', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
