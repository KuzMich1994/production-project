import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Page } from '@/widgets/page';

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
