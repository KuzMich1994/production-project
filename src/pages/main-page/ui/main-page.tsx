import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/page';
import { Counter } from '@/entities/counter';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page>
      <Counter />
      <h1>{t('Главная страница')}</h1>
    </Page>
  );
}

export default MainPage;
