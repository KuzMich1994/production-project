import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/button/button';
import { counterActions } from '../model/slice/counter-slice';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';

export function Counter(): JSX.Element {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-button"
        onClick={increment}
      >
        {t('Increment')}
      </Button>
      <Button
        data-testid="decrement-button"
        onClick={decrement}
      >
        {t('Decrement')}
      </Button>
    </div>
  );
}
