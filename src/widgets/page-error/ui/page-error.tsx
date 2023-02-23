import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/button';
import s from './page-error.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps): JSX.Element {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <ul className={classNames(s.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </ul>
  );
}
