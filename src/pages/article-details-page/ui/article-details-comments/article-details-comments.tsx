import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import Text, { TextSize } from 'shared/ui/text/text';
import AddCommentForm from 'features/add-comment-form/ui/add-comment-form/add-comment-form';
import { CommentList } from 'entities/comment';
import { VStack } from 'shared/ui/stack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/article-details-comments-selectors';
import { addCommentForArticle } from '../../model/services/add-comment-for-article/add-comment-for-article';
import { getArticleComments } from '../../model/slice/article-details-comments-slice';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

function ArticleDetailsComments({ className, id }: ArticleDetailsCommentsProps): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="8" max className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Комментарии').toString()}
      />
      <Suspense fallback="Загрузка...">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList
        error={error}
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
}

export default memo(ArticleDetailsComments);
