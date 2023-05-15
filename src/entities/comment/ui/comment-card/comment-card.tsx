import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar/avatar';
import Text, { TextAlign, TextTheme } from 'shared/ui/text/text';
import Skeleton from 'shared/ui/skeleton/skeleton';
import { Comment } from '../../model/types/comment';
import s from './comment-card.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
  error?: string;
}

function CommentCard(props: CommentCardProps): JSX.Element {
  const {
    comment,
    isLoading,
    className,
    error,
  } = props;

  if (error) {
    return (
      <Text text={error} align={TextAlign.CENTER} theme={TextTheme.ERROR} />
    );
  }

  if (isLoading) {
    return (
      <div className={classNames(s.commentCard, {}, [className])}>
        <div className={s.header}>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton className={s.username} width={100} height={24} />
        </div>
        <Skeleton width="100%" height={48} className={s.text} />
      </div>
    );
  }

  return (
    <div className={classNames(s.commentCard, {}, [className])}>
      <div className={s.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={s.username} title={comment.user.username} />
      </div>
      <Text className={s.text} text={comment.text} />
    </div>
  );
}

export default memo(CommentCard);
