import { useContext } from 'react';
import { CreatedTheme } from '../themes/createTheme';
import { themeContext } from '../themes/ThemeProvider';

export type theme = CreatedTheme;

export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
