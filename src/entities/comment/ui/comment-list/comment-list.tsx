import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names/class-names';
import Text from '@/shared/ui/text/text';
import { VStack } from '@/shared/ui/stack';
import CommentCard from '../comment-card/comment-card';
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
      <VStack gap="8" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
              error={error}
            />
          ))
          : <Text text={t('Комментарии отстутствуют').toString()} />
      }
    </VStack>
  );
}

export default memo(CommentList);
