import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button';
import { useCounterActions } from '../model/slice/counter-slice';
import { useCounterValue } from '../model/selectors/get-counter-value/get-counter-value';

export function Counter(): JSX.Element {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { increment, decrement, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-button"
        onClick={handleInc}
      >
        {t('Increment')}
      </Button>
      <Button
        data-testid="decrement-button"
        onClick={handleDec}
      >
        {t('Decrement')}
      </Button>
      <Button
        data-testid="decrement-button"
        onClick={handleAddFive}
      >
        {t('add five')}
      </Button>
    </div>
  );
}
