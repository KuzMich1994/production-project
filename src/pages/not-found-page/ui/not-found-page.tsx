import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import s from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
}
