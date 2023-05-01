import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/stories.jpg';
import { updateProfileData, ValidateProfileError } from 'entities/profile';
import { profileActions, profileReducer } from './profile-slice';
import { ProfileSchema } from '../types/profile';

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

describe('loginSliceTest', () => {
  test('set test readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });

  test('test cansel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data };
    expect(profileReducer(state as ProfileSchema, profileActions.canselEditProfile()))
      .toEqual({
        readonly: true,
        validateErrors: [],
        data,
        form: data,
      });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: '123456',
    })))
      .toEqual({
        form: { username: '123456' },
      });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        readonly: true,
        validateErrors: undefined,
        form: data,
        data,
      });
  });
});
