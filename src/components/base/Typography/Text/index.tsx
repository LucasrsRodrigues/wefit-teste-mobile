import React from 'react';

import IRNTextProps, * as S from './styles';
import { TextProps } from 'react-native-svg';

interface ITextProps extends TextProps, IRNTextProps {
  children: string | string[];
  fontSize?: number;
}

export function Text({ children, variant = "regular", type = "primary", fontSize = 12, color = "#000000", ...rest }: ITextProps) {
  return (
    <S.RNText variant={variant} type={type} fontSize={fontSize} color={color} {...rest}>
      {children}
    </S.RNText>
  );
}