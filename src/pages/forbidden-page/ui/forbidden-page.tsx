import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Page } from '@/widgets/page';

interface ForbiddenPageProps {
  className?: string;
}

function ForbiddenPage({ className }: ForbiddenPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page data-testid="forbidden-page" className={classNames('', {}, [className])}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
}

export default memo(ForbiddenPage);
