import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

function LangSwitcher({ className, short }: LangSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR_INVERTED}
    >
      {t(short ? 'lng' : 'Язык')}
    </Button>
  );
}

export default memo(LangSwitcher);
