import {useTranslation} from 'react-i18next';

function MainPage(): JSX.Element {

  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
    </div>
  );
}

export default MainPage;
