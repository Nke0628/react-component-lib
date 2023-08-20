import { createContext } from 'react';
import { CreatedTheme, createTheme } from './createTheme';

export const themeContext = createContext<CreatedTheme>(createTheme());

interface Props {
  theme: CreatedTheme;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};
