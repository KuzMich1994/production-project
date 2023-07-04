import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import { useSelector } from 'react-redux';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/text/text';
import Skeleton from 'shared/ui/skeleton/skeleton';
import { Avatar } from 'shared/ui/avatar/avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import Icon from 'shared/ui/icon/icon';
import { HStack, VStack } from 'shared/ui/stack';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetch-article-by-id';
import ArticleCodeBlockComponent from '../article-code-block-component/article-code-block-component';
import ArticleImageBlockComponent
  from '../article-image-block-component/article-image-block-component';
import ArticleTextBlockComponent from '../article-text-block-component/article-text-block-component';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/article-details';
import s from './article-details.module.scss';
import { articleDetailsReducer } from '../../model/slice/article-details-slice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

function ArticleDetails({ className, id }: ArticleDetailsProps): JSX.Element {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE: {
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={s.block}
          />
        );
      }
      case ArticleBlockType.IMAGE: {
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={s.block}
          />
        );
      }
      case ArticleBlockType.TEXT: {
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={s.block}
            block={block}
          />
        );
      }
      default: {
        return null;
      }
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <VStack gap="8" max align="center">
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton width={700} height={31} />
        <Skeleton width={400} height={31} />
        <Skeleton width="100%" height={231} />
        <Skeleton width="100%" height={231} />
      </VStack>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи').toString()}
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={200} src={data?.img} alt={data?.title} className={s.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Text
            className={s.title}
            title={data?.title}
            text={data?.subtitle}
            size={TextSize.L}
          />
          <HStack align="center" gap="8">
            <Icon Svg={EyeIcon} className={s.icon} />
            <Text text={String(data?.views)} />
          </HStack>
          <HStack align="center" gap="8">
            <Icon Svg={CalendarIcon} className={s.icon} />
            <Text text={data?.createdAt} />
          </HStack>
        </VStack>
        {
          data?.blocks.map(renderBlock)
        }
      </>
    );
  }

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames(s.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetails);
