import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@components/index';

import { useTheme } from 'styled-components/native';

import * as S from './styles';

export function DetailsScreenHeader() {
  const { goBack } = useNavigation();
  const theme = useTheme();

  return (
    <S.DetailsScreenHeader>

      <S.BackButton onPress={goBack}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
        />
      </S.BackButton>

      <Text
        color={theme.colors.white}
        type='secondary'
        variant='medium'
        fontSize={20}
      >
        Detalhes
      </Text>
    </S.DetailsScreenHeader>
  );
}