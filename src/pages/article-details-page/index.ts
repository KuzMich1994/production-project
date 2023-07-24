import { articleDetailsPageReducer } from './model/slice';
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/article-details-page/article-details-page.async';
import { ArticleDetailsCommentsSchema } from './model/types/article-details-comments-schema';
import { ArticleDetailsRecommendationsSchema } from './model/types/article-details-recommendations-schema';
import { ArticleDetailsPageSchema } from './model/types/index';

export {
  ArticleDetailsPage,
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
  ArticleDetailsPageSchema,
  articleDetailsPageReducer,
};
