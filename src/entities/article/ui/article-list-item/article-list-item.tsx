import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Text } from '@/shared/ui/text';
import ViewsIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/icon';
import { Card } from '@/shared/ui/card';
import { Avatar } from '@/shared/ui/avatar';
import { AppLink } from '@/shared/ui/app-link';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import ArticleTextBlockComponent from '../article-text-block-component/article-text-block-component';
import { Article, ArticleTextBlock } from '../../model/types/article';
import s from './article-list-item.module.scss';
import { AppImage } from '@/shared/ui/app-image';
import { Skeleton } from '@/shared/ui/skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

function ArticleListItem(props: ArticleListItemProps): JSX.Element {
  const {
    className,
    article,
    view,
    target,
  } = props;

  const { t } = useTranslation();

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
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            alt={article.title}
            className={s.img}
          />
          {
            textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
            )
          }
          <div className={s.footer}>
            <AppLink
              className={s.linkButton}
              target={target}
              to={`/articles/${article.id}`}
            >
              {t('Читать далее...')}
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`/articles/${article.id}`}
      className={classNames(s.articleListItem, {}, [className, s[view.toLowerCase()]])}
    >
      <Card
        role="button"
      >
        <div className={s.imgContainer}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={s.img}
          />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoContainer}>
          {types}
          {views}
        </div>
        <Text hasElementTitle text={article.title} className={s.articleTitle} />
      </Card>
    </AppLink>
  );
}

export default memo(ArticleListItem);
