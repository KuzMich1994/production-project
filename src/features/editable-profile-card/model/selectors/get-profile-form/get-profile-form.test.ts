import { StateSchema } from 'app/providers/store-provider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/stories.jpg';
import { getProfileForm } from './get-profile-form';

describe('getProfileFormTest', () => {
  test('should return profile form', () => {
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
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
