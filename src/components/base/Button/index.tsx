import React, { SVGProps } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';
import { Text } from '../Typography/Text';
import { useTheme } from 'styled-components/native';
import { SvgProps } from 'react-native-svg';

interface IButtonsProps extends TouchableOpacityProps, S.IButtonProps {
  label: string;
  rightIcon?: React.JSX.Element;
  tintColor?: string;
}

export function Button({ label, rightIcon, backgroundColor = "#00000000", tintColor = "#000000", ...rest }: IButtonsProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      {...rest}
    >
      <Text
        type='secondary'
        fontSize={15}
        variant='medium'
        textTransform="uppercase"
        color={tintColor}
      >
        {label}
      </Text>

      {rightIcon ?? null}
    </S.Button>
  );
}