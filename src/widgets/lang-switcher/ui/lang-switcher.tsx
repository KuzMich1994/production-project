import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {t(short ? 'lng' : 'Язык')}
    </Button>
  );
}
