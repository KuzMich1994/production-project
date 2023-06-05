import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import ArticleListItemSkeleton from 'entities/article/ui/article-list-item/article-list-item-skeleton';
import { nanoid } from '@reduxjs/toolkit';
import ArticleListItem from '../article-list-item/article-list-item';
import s from './article-list.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
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
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view.toLowerCase()]])}>
        {
          getSkeletons(view)
        }
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(s.articleList, {}, [className, s[view.toLowerCase()]])}>
      {
        articles.length
          ? articles.map(renderArticle)
          : null
      }
    </div>
  );
}

export default memo(ArticleList);
