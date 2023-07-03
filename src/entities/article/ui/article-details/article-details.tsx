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
      <>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={700} height={31} />
        <Skeleton className={s.skeleton} width={400} height={31} />
        <Skeleton className={s.skeleton} width="100%" height={231} />
        <Skeleton className={s.skeleton} width="100%" height={231} />
      </>
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
        <div className={s.avatarContainer}>
          <Avatar size={200} src={data?.img} alt={data?.title} className={s.avatar} />
        </div>
        <Text
          className={s.title}
          title={data?.title}
          text={data?.subtitle}
          size={TextSize.L}
        />
        <div className={s.articleInfo}>
          <Icon Svg={EyeIcon} className={s.icon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={s.articleInfo}>
          <Icon Svg={CalendarIcon} className={s.icon} />
          <Text text={data?.createdAt} />
        </div>
        {
          data?.blocks.map(renderBlock)
        }
      </>
    );
  }

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount>
      <div className={classNames(s.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetails);
