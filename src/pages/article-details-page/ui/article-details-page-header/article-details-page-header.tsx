import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { RoutePath } from 'shared/config/route-config/route-config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/article';
import s from './article-details-page-header.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

function ArticleDetailsPageHeader(props: ArticleDetailsPageHeaderProps): JSX.Element {
  const { className } = props;
  const navigate = useNavigate();

  const { t } = useTranslation();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(s.articleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку')}
      </Button>
      {
        canEdit && (
          <Button
            className={s.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Редактировать')}
          </Button>
        )
      }
    </div>
  );
}

export default memo(ArticleDetailsPageHeader);
