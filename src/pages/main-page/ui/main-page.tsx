import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/page';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('Главная страница')}</h1>
    </Page>
  );
}

export default MainPage;
