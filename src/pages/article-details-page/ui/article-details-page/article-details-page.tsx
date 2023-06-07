import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/article';
import { useNavigate, useParams } from 'react-router-dom';
import Text from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import { AddCommentFormAsync } from 'features/add-comment-form';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { RoutePath } from 'shared/config/route-config/route-config';
import Page from 'widgets/page/page';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import { addCommentForArticle } from '../../model/services/add-comment-for-article/add-comment-for-article';
import s from './article-details-page.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/article-details-comments-slice';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/article-details-comments-selectors';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

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
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onBackToList}
        >
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии').toString()} className={s.commentTitle} />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <CommentList
          error={error}
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
