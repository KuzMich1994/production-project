import { rtkApi } from 'shared/api/rtk-api';
import { Article } from 'entities/article';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useGetArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
