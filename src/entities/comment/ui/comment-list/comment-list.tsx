import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Text from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
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
      <div className={classNames(s.commentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
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
