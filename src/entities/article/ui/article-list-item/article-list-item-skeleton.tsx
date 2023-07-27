import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import Card from '@/shared/ui/card/card';
import Skeleton from '@/shared/ui/skeleton/skeleton';
import { ArticleView } from '../../model/consts/consts';
import s from './article-list-item.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

function ArticleListItemSkeleton(props: ArticleListItemSkeletonProps): JSX.Element {
  const {
    className,
    view,
  } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
        <Card className={s.card}>
          <div className={s.header}>
            <div className={s.headerContainer}>
              <Skeleton width={30} height={30} border="50%" className={s.userAvatar} />
              <Skeleton width={150} height={16} className={s.username} />
            </div>
            <Skeleton width={130} height={16} className={s.date} />
          </div>
          <Skeleton width="100%" height={16} className={s.title} />
          <Skeleton width="100%" height={200} className={s.img} />
          <div className={s.footer}>
            <Skeleton width={150} height={30} />
            <Skeleton width={100} height={16} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
      <Card>
        <div className={s.imgContainer}>
          <Skeleton width={200} height={200} className={s.img} />
        </div>
        <div className={s.infoContainer}>
          <Skeleton width={130} height={16} className={s.types} />
        </div>
        <Skeleton width="100%" height={16} className={s.articleTitle} />
      </Card>
    </div>
  );
}

export default memo(ArticleListItemSkeleton);
