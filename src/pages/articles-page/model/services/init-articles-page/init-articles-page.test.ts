import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import { articlesPageActions } from '../../slices/articles-page-slice';
import { initArticlesPage } from './init-articles-page';

jest.mock('../../slices/articles-page-slice');

const searchParams = new URLSearchParams('');

describe('initArticlesPageTest', () => {
  test('init state called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 5,
        isLoading: false,
        _inited: false,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(articlesPageActions.initState).toBeCalledTimes(1);
  });
  test('init state not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: false,
        limit: 5,
        isLoading: false,
        _inited: true,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(articlesPageActions.initState).not.toHaveBeenCalled();
  });
});
