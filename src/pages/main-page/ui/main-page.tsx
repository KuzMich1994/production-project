import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/input/input';
import { useState } from 'react';

function MainPage(): JSX.Element {
  const { t } = useTranslation();

  const [value, setValue] = useState<string>('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <Input
        placeholder="insert"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default MainPage;
