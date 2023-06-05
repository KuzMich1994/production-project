import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import Text from 'shared/ui/text/text';
import ViewsIcon from 'shared/assets/icons/eye-20-20.svg';
import Icon from 'shared/ui/icon/icon';
import Card from 'shared/ui/card/card';
import { Avatar } from 'shared/ui/avatar/avatar';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route-config/route-config';
import ArticleTextBlockComponent from '../article-text-block-component/article-text-block-component';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
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

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article.id}`);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={s.types} />;
  const views = (
    <div className={s.viewsContainer}>
      <Icon Svg={ViewsIcon} className={s.viewsIcon} />
      <Text text={String(article.views)} className={s.views} />
    </div>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
        <Card className={s.card}>
          <div className={s.header}>
            <div className={s.headerContainer}>
              <Avatar size={30} src={article.user.avatar} alt={article.user.username} className={s.userAvatar} />
              <Text text={article.user.username} className={s.username} />
            </div>
            <Text text={article.createdAt} className={s.date} />
          </div>
          <Text title={article.title} className={s.title} />
          {types}
          <img src={article.img} alt={article.title} className={s.img} />
          {
            textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
            )
          }
          <div className={s.footer}>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onOpenArticle}
            >
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}>
      <Card
        role="button"
        onClick={onOpenArticle}
      >
        <div className={s.imgContainer}>
          <img src={article.img} alt={article.title} className={s.img} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoContainer}>
          {types}
          {views}
        </div>
        <Text hasElementTitle text={article.title} className={s.articleTitle} />
      </Card>
    </div>
  );
}

export default memo(ArticleListItem);
