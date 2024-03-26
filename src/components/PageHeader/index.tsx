import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@components/base/Typography/Text';

import * as S from './styles';
import { useRepositories } from '@hooks/repositories.hooks';

export function PageHeader() {
  const { handleOpenModal } = useRepositories();

  return (
    <S.PageHeader>
      <Text
        type="secondary"
        variant='medium'
        fontSize={20}
      >
        WeFit
      </Text>

      <S.PageHeaderButton onPress={handleOpenModal}>
        <Ionicons name="settings-sharp" size={24} color="black" />
      </S.PageHeaderButton>
    </S.PageHeader>
  );
}