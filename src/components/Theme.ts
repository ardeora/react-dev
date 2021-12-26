import { useState } from 'react';

export type ThemeType = 'light' | 'dark';

export interface useThemeReturnType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeReturnType => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return { theme, toggleTheme };
};
