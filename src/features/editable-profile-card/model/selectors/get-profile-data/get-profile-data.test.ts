import { StateSchema } from '@/app/providers/store-provider';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import avatar from '@/shared/assets/tests/stories.jpg';
import { getProfileData } from './get-profile-data';

describe('getProfileDataTest', () => {
  test('should return profile data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.RUSSIA,
      currency: Currency.RUB,
      city: 'Dmitrov',
      avatar,
      lastName: 'Kuzmichev',
      first: 'Sergey',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
