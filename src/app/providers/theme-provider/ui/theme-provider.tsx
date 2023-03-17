import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: Theme;
}

function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider
      value={defaultProps}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
