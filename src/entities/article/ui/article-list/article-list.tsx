import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import ArticleListItem from '../article-list-item/article-list-item';
import s from './article-list.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

function ArticleList(props: ArticleListProps): JSX.Element {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(s.articleList, {}, [className])}>
      {
        articles.length
          ? articles.map(renderArticle)
          : null
      }
    </div>
  );
}

export default memo(ArticleList);
