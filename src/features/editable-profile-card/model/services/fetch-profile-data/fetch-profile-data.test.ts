import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/stories.jpg';
import { fetchProfileData } from './fetch-profile-data';

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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
