import React from 'react';
import styled, { css } from 'styled-components';
import { FontSizes } from '../../themes/createFontSize';
import { useTheme } from '../../hooks/useTheme';

export type TextProps = {
  size?: FontSizes;
};

export type Props = TextProps & {
  children: React.ReactNode;
};

export const Text: React.FC<Props> = ({ ...props }) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.span<TextProps>(({ size = 'L' }) => {
  const { fontSize } = useTheme();
  return css`
    font-size: ${fontSize[size]};
  `;
});
