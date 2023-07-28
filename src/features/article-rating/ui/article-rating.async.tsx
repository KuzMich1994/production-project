import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './article-rating';
import { Skeleton } from '@/shared/ui/skeleton';

const ArticleRatingLazy = lazy(() => import('./article-rating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
