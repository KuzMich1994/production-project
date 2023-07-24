import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import Page from 'widgets/page/page';
import { VStack } from 'shared/ui/stack';
import { ArticleRecommendationsList } from 'features/article-recommendations-list';
import s from './article-details-page.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPageHeader from '../article-details-page-header/article-details-page-header';
import ArticleDetailsComments from '../article-details-comments/article-details-comments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps): JSX.Element {
  const { id } = useParams<{id: string}>();

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <Page className={classNames(s.articleDetailsPage, {}, [className])}>
        <VStack gap="32" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
