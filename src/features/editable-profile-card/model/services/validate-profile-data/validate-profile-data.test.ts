import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/stories.jpg';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validate-profile-data';

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

describe('validateProfileDataTest', () => {
  test('success', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastName: '' });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('has incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('has incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({
      ...data, first: '', lastName: '', age: 0, country: undefined,
    });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('empty data', async () => {
    const result = validateProfileData();
    expect(result).toEqual([
      ValidateProfileError.NO_DATA,
    ]);
  });
});
