import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/select/select';
import { memo } from 'react';
import ListBox from 'shared/ui/list-box/list-box';
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
    <ListBox
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      defaultValue={t('Укажите страну').toString()}
      label={t('Укажите страну').toString()}
      className={classNames('', {}, [className])}
      items={options}
      direction="top"
    />
  );
}

export default memo(CountrySelectStories);
