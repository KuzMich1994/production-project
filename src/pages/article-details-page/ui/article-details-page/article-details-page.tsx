import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/article';
import { useParams } from 'react-router-dom';
import Text, { TextSize } from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { AddCommentFormAsync } from 'features/add-comment-form';
import Page from 'widgets/page/page';
import { VStack } from 'shared/ui/stack';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetch-article-recommendations/fetch-article-recommendations';
import {
  getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/article-details-recommendations-selector';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import { addCommentForArticle } from '../../model/services/add-comment-for-article/add-comment-for-article';
import s from './article-details-page.module.scss';
import { getArticleComments } from '../../model/slice/article-details-comments-slice';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/article-details-comments-selectors';
import {
  getArticleRecommendations,
} from '../../model/slice/article-details-recommendations-slice';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPageHeader
  from '../article-details-page-header/article-details-page-header';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

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
          <Text
            size={TextSize.L}
            title={t('Рекомендуем').toString()}
            className={s.commentTitle}
          />
          <ArticleList
            target="_blank"
            isLoading={recommendationsIsLoading}
            articles={recommendations}
            className={s.recommendations}
          />
          <Text
            size={TextSize.L}
            title={t('Комментарии').toString()}
            className={s.commentTitle}
          />
          <AddCommentFormAsync onSendComment={onSendComment} />
          <CommentList
            error={error}
            isLoading={commentsIsLoading}
            comments={comments}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
