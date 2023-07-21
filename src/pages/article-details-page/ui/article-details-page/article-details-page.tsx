import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/text/text';
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
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <Page className={classNames(s.articleDetailsPage, {}, [className])}>
        <Text title={t('Статья не найдена').toString()} />
      </Page>
    );
  }

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
