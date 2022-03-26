import { useContext } from 'react';
import { ThemeContext } from './theme-provider';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeContext');
  }
  return context;
};
