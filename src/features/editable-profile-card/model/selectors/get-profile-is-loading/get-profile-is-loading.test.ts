import { StateSchema } from 'app/providers/store-provider';
import { getProfileIsLoading } from './get-profile-is-loading';

describe('getProfileIsLoadingTest', () => {
  test('should return profile is loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
