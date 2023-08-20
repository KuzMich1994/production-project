import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/page';

function AboutPage(): JSX.Element {
  const { t } = useTranslation('about');

  return (
    <Page data-testid="about-page">
      <h1>{t('О сайте')}</h1>
    </Page>
  );
}

export default AboutPage;
