import {classNames} from 'shared/lib/class-names/class-names';
import s from './lang-switcher.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/button/button';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({className}: LangSwitcherProps): JSX.Element {

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={classNames(s.langSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  );
}