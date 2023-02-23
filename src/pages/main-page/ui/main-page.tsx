import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/error-boundary';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <BugButton />
    </div>
  );
}

export default MainPage;
