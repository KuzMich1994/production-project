import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/rating';
import { useGetArticleRating, useRateArticle } from '../api/article-rating-api';
import { getUserAuthData } from '@/entities/user';
import { Skeleton } from '@/shared/ui/skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

function ArticleRating(props: ArticleRatingProps) {
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        rate: starsCount,
        articleId,
        feedback,
        userId: userData?.id ?? '',
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <Rating
      onAccept={onAccept}
      onCansel={onCancel}
      rate={rating?.rate}
      title={t('Как вам статья?')}
      feedbackTitle={t('Как вам статья? A?')}
      hasFeedback
      className={className}
    />
  );
}

export default memo(ArticleRating);
