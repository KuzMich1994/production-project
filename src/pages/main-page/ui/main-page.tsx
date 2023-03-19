import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <Counter />
    </div>
  );
}

export default MainPage;
