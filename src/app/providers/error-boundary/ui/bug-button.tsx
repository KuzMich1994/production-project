import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button';

// Компонент для тестирования ErrorBoundary

export function BugButton(): JSX.Element {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => setError((prevState) => !prevState);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={throwError}
    >
      {t('throw error')}
    </Button>
  );
}
