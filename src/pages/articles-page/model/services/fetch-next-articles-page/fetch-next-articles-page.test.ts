import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import { fetchNextArticlesPage } from './fetch-next-articles-page';
import { fetchArticleList } from '../fetch-article-list/fetch-article-list';

jest.mock('../fetch-article-list/fetch-article-list');

describe('fetchNextArticlesPageTest', () => {
  test('fetchArticleList called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticleList).toBeCalledWith({ page: 3 });
  });
  test('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: false,
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
