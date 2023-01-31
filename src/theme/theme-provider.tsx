import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './theme-context';
import {ReactNode, useMemo, useState} from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
  children: ReactNode;
}

function ThemeProvider({children}: ThemeProviderProps) {

  const [theme, setTheme] = useState<Theme>(defaultTheme);



  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
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
