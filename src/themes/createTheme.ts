import {
  CreatedFontSizeTheme,
  FontSizeProperty,
  createFontSize,
} from './createFontSize';

interface ThemeProperty {
  fontSize?: FontSizeProperty;
}

export interface CreatedTheme {
  fontSize: CreatedFontSizeTheme;
}

export const createTheme = (theme: ThemeProperty = {}): CreatedTheme => {
  return {
    fontSize: createFontSize(getFontSizeProperty(theme)),
  };
};

function getFontSizeProperty(theme: ThemeProperty): FontSizeProperty {
  return {
    ...theme.fontSize,
  };
}
