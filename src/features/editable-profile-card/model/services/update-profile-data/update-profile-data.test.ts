import { TestAsyncThunk } from '@/shared/lib/tests/test-async-thunk/test-async-thunk';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import avatar from '@/shared/assets/tests/stories.jpg';
import { ValidateProfileError } from '../../consts/consts';
import { updateProfileData } from './update-profile-data';

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

describe('fetchProfileDataTest', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
