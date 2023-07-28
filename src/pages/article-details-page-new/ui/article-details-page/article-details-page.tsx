import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/class-names';
import { ArticleDetails } from '@/entities/article';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { Page } from '@/widgets/page';
import { VStack } from '@/shared/ui/stack';
import { ArticleRecommendationsList } from '@/features/article-recommendations-list';
import s from './article-details-page.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPageHeader from '../article-details-page-header/article-details-page-header';
import ArticleDetailsComments from '../article-details-comments/article-details-comments';
import { ArticleRating } from '@/features/article-rating';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
  const { id } = useParams<{id: string}>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducerList={reducerList} removeAfterUnmount>
      <Page className={classNames(s.articleDetailsPage, {}, [className])}>
        <VStack gap="32" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
