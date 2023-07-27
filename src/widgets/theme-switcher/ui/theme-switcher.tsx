import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Theme, useTheme } from '@/app/providers/theme-provider';
import ThemeLite from '@/shared/assets/icons/theme-light.svg';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from '@/shared/ui/button/button';
import s from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT
          ? <ThemeLite />
          : <ThemeDark className={s.icon} />
      }
    </Button>
  );
}

export default memo(ThemeSwitcher);
