import React from 'react';

export type TextProps = {
  text: string;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ text, className = '' }) => {
  return <p className={className}>{text}</p>;
};

Text.defaultProps = {
  text: 'hoge',
  className: 'hoge',
};
