import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/select/select';
import { memo, useCallback } from 'react';
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
    <Select
      readonly={readonly}
      className={classNames('', {}, [className])}
      label={t('Укажите валюту').toString()}
      name="currency"
      options={options}
      value={value}
      onChange={onChangeHandler}
    />
  );
}

export default memo(CurrencySelect);
