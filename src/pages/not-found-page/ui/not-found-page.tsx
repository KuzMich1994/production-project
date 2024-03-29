import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Page } from '@/widgets/page';
import s from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Page data-testid="not-found-page" className={classNames(s.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
}
