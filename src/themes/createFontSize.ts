import { merge } from 'lodash';

const defaultScaleFactor = 6;

export type FontSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface FontSizeProperty {
  scaleFactor?: number;
  XXS?: string;
  XS?: string;
  S?: string;
  M?: string;
  L?: string;
  XL?: string;
  XXL?: string;
}

export interface CreatedFontSizeTheme {
  XXS: string;
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL: string;
}

const getFontSize = (scaleFactor: number, diff: number = 0): string => {
  return `${scaleFactor / (scaleFactor - diff)}rem`;
};

const getSizes = (scaleFactor: number) => {
  return {
    XXS: getFontSize(scaleFactor, -3),
    XS: getFontSize(scaleFactor, -2),
    S: getFontSize(scaleFactor, -1),
    M: getFontSize(scaleFactor),
    L: getFontSize(scaleFactor, 1),
    XL: getFontSize(scaleFactor, 2),
    XXL: getFontSize(scaleFactor, 3),
  };
};

export const defaultFontSize: CreatedFontSizeTheme = {
  ...getSizes(defaultScaleFactor),
};

export const createFontSize = (
  fontSizeProperty: FontSizeProperty = {},
): CreatedFontSizeTheme => {
  const { scaleFactor, ...userTokens } = fontSizeProperty;
  const created: CreatedFontSizeTheme = merge(
    {
      ...defaultFontSize,
    },
    userTokens,
  );
  return created;
};
