import { useTranslation } from 'react-i18next';
import Page from '@/widgets/page/page';
import { Rating } from '@/entities/rating';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('Главная страница')}</h1>
      <Rating
        title={t('Как вам статья?')}
        feedbackTitle={t('Как вам статья? A?')}
        hasFeedback
      />
    </Page>
  );
}

export default MainPage;
