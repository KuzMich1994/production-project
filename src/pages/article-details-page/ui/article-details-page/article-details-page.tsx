import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect/use-initial-effect';
import {
  fetchCommentsByArticleId,
} from 'pages/article-details-page/model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
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
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(s.articleDetailsPage, {}, [className])}>
        <Text title={t('Статья не найдена').toString()} />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <div className={classNames(s.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии').toString()} className={s.commentTitle} />
        <CommentList
          error={error}
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
