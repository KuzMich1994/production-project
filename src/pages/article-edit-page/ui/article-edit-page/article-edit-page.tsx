import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Page from 'widgets/page/page';
import { useParams } from 'react-router-dom';
import s from './article-edit-page.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

function ArticleEditPage(props: ArticleEditPageProps): JSX.Element {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const { t } = useTranslation();

  return (
    <Page className={classNames(s.articleEditPage, {}, [className])}>
      {
        isEdit
          ? `Редактирование статьи с ID = ${id}`
          : 'Создание новой статьи'
      }
    </Page>
  );
}

export default memo(ArticleEditPage);
