import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import ListBox from '@/shared/ui/popups/ui/list-box/list-box';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

function CurrencySelect({
  className, value, onChange, readonly,
}: CurrencySelectProps): JSX.Element {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Currency);
  }, [onChange]);

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      items={options}
      defaultValue={t('Укажите валюту').toString()}
      label={t('Укажите валюту').toString()}
      className={classNames('', {}, [className])}
      readonly={readonly}
      direction="top right"
    />
  );
}

export default memo(CurrencySelect);
