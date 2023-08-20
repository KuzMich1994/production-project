import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Page } from '@/widgets/page';

interface AdminPanelPageProps {
  className?: string;
}

function AdminPanelPage({ className }: AdminPanelPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page data-testid="admin-panel-page" className={classNames('', {}, [className])}>
      {t('Админ панель')}
    </Page>
  );
}

export default memo(AdminPanelPage);
