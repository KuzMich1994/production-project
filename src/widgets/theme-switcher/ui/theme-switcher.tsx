import { classNames } from 'shared/lib/class-names/class-names';
import { Theme, useTheme } from 'app/providers/theme-provider';
import ThemeLite from 'shared/assets/icons/theme-light.svg';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/button/button';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT
          ? <ThemeLite />
          : <ThemeDark />
      }
    </Button>
  );
}
