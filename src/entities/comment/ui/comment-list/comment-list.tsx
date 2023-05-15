import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Text from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import Skeleton from 'shared/ui/skeleton/skeleton';
import CommentCard from '../comment-card/comment-card';
import s from './comment-list.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

function CommentList(props: CommentListProps): JSX.Element {
  const {
    comments,
    isLoading,
    className,
    error,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <>
        <div className={classNames(s.commentCard, {}, [className])}>
          <div className={s.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton className={s.username} width={100} height={24} />
          </div>
          <Skeleton width="100%" height={48} className={s.text} />
        </div>
        <div className={classNames(s.commentCard, {}, [className])}>
          <div className={s.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton className={s.username} width={100} height={24} />
          </div>
          <Skeleton width="100%" height={48} className={s.text} />
        </div>
        <div className={classNames(s.commentCard, {}, [className])}>
          <div className={s.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton className={s.username} width={100} height={24} />
          </div>
          <Skeleton width="100%" height={48} className={s.text} />
        </div>
      </>
    );
  }

  return (
    <div className={classNames(s.commentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              className={s.commentCard}
              comment={comment}
              isLoading={isLoading}
              error={error}
            />
          ))
          : <Text text={t('Комментарии отстутствуют').toString()} />
      }
    </div>
  );
}

export default memo(CommentList);
