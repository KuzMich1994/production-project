import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Page from 'widgets/page/page';
import s from './admin-panel-page.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

function AdminPanelPage({ className }: AdminPanelPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page className={classNames(s.adminPanelPage, {}, [className])}>
      {t('Админ панель')}
    </Page>
  );
}

export default memo(AdminPanelPage);
