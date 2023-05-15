import { StateSchema } from 'app/providers/store-provider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './article-details';

describe('articleDetailsTest', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return not isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
