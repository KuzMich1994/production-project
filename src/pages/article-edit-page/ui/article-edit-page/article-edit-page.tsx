import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import Page from 'widgets/page/page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

function ArticleEditPage(props: ArticleEditPageProps): JSX.Element {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {
        isEdit
          ? `Редактирование статьи с ID = ${id}`
          : 'Создание новой статьи'
      }
    </Page>
  );
}

export default memo(ArticleEditPage);
