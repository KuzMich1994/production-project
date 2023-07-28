import { HTMLAttributeAnchorTarget, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { TextSize, Text } from '@/shared/ui/text';
import { classNames } from '@/shared/lib/class-names/class-names';
import { ArticleView } from '../../model/consts/consts';
import ArticleListItemSkeleton from '../article-list-item/article-list-item-skeleton';
import ArticleListItem from '../article-list-item/article-list-item';
import s from './article-list.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 2)
  .fill(0)
  .map(() => (
    <ArticleListItemSkeleton key={nanoid()} view={view} />
  ));

function ArticleList(props: ArticleListProps): JSX.Element {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
    target,
  } = props;

  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view.toLowerCase()]])}>
        <Text size={TextSize.L} text={t('Статьи не найдены').toString()} />
      </div>
    );
  }

  return (
    <div className={classNames(s.articleList, {}, [className, s[view.toLowerCase()]])}>
      {
        articles.length
          ? articles.map(renderArticle)
          : null
      }
      {isLoading && getSkeletons(view)}
    </div>
  );
}

export default memo(ArticleList);
