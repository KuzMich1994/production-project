import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ThemeContext } from '../../../../shared/lib/context/theme-context';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/local-storage';

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

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={defaultProps}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
