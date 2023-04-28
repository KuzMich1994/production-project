import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/select/select';
import { memo } from 'react';
import { Country } from '../model/types/country';

interface CountrySelectStoriesProps {
  className?: string;
  onChange?: (value: Country) => void;
  value?: Country;
  readonly?: boolean;
}

const options = [
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.ARMENIA, content: Country.ARMENIA },
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];

function CountrySelectStories({
  className, readonly, value, onChange,
}: CountrySelectStoriesProps): JSX.Element {
  const { t } = useTranslation();

  const onChangeHandler = (val: string) => {
    onChange?.(val as Country);
  };

  return (
    <Select
      readonly={readonly}
      className={classNames('', {}, [className])}
      label={t('Укажите страну').toString()}
      name="currency"
      options={options.sort((a, b) => (a.value > b.value ? 1 : -1))}
      value={value}
      onChange={onChangeHandler}
    />
  );
}

export default memo(CountrySelectStories);
