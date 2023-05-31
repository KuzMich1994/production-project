import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Text from 'shared/ui/text/text';
import ViewsIcon from 'shared/assets/icons/eye-20-20.svg';
import Icon from 'shared/ui/icon/icon';
import { Article, ArticleView } from '../../model/types/article';
import s from './article-list-item.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

function ArticleListItem(props: ArticleListItemProps): JSX.Element {
  const {
    className,
    article,
    view,
  } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
        {article.title}
      </div>
    );
  }

  // lesson 54 16:11

  return (
    <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <img src={article.img} alt={article.title} className={s.img} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoContainer}>
          <Text hasElementTitle text={article.type.join(', ')} className={s.types} />
          <div className={s.viewsContainer}>
            <Icon Svg={ViewsIcon} className={s.viewsIcon} />
            <Text text={String(article.views)} className={s.views} />
          </div>
        </div>
        <Text hasElementTitle text={article.title} className={s.articleTitle} />
      </div>
    </div>
  );
}

export default memo(ArticleListItem);
