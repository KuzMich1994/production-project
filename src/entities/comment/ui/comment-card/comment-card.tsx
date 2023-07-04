import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar/avatar';
import Text, { TextAlign, TextTheme } from 'shared/ui/text/text';
import Skeleton from 'shared/ui/skeleton/skeleton';
import AppLink from 'shared/ui/app-link/app-link';
import { RoutePath } from 'shared/config/route-config/route-config';
import { HStack, VStack } from 'shared/ui/stack';
import { Comment } from '../../model/types/comment';
import s from './comment-card.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
  error?: string;
}

function CommentCard(props: CommentCardProps) {
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
      <VStack gap="4" max className={classNames(s.commentCard, {}, [className, s.isLoading])}>
        <HStack gap="4" max>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton className={s.username} width={100} height={24} />
        </HStack>
        <Skeleton width="100%" height={48} className={s.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap="4" max className={classNames(s.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <HStack gap="4" max>
          {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
          <Text className={s.username} title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text className={s.text} text={comment.text} />
    </VStack>
  );
}

export default memo(CommentCard);
