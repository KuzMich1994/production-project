import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme-context';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme = Theme.LIGHT;
    switch (theme) {
      case Theme.LIGHT: {
        newTheme = Theme.DARK;
        setTheme?.(newTheme);
        break;
      }
      case Theme.DARK: {
        newTheme = Theme.LIGHT;
        setTheme?.(newTheme);
        break;
      }
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
