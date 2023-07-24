import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Page from 'widgets/page/page';
import s from './forbidden-page.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

function ForbiddenPage({ className }: ForbiddenPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page className={classNames(s.forbiddenPage, {}, [className])}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
}

export default memo(ForbiddenPage);
