import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonTheme, Button } from '@/shared/ui/button';
import { classNames } from '@/shared/lib/class-names/class-names';
import { getArticleDetailsData } from '@/entities/article';
import { HStack } from '@/shared/ui/stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

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
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?.id));
  }, [article?.id, navigate]);

  return (
    <HStack max gap="4" align="center" justify="between" className={classNames('', {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку')}
      </Button>
      {
        canEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Редактировать')}
          </Button>
        )
      }
    </HStack>
  );
}

export default memo(ArticleDetailsPageHeader);
