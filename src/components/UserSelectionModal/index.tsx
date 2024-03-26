import React, { useEffect, useState } from 'react';
import { useModalize } from 'react-native-modalize';
import { Button } from '@components/base/Button';

import { Text } from '@components/base/Typography/Text';

interface IUserSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  submitModal: (newOwnerName: string) => void;
}

import * as S from './styles';
import { useTheme } from 'styled-components/native';


export function UserSelectionModal({ visible, onClose, submitModal }: IUserSelectionModalProps) {
  const { ref, open, close } = useModalize();
  const theme = useTheme();
  const [search, setSearch] = useState("");

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  function saveSearch() {
    close();
    submitModal(search)
  }

  return (
    <S.Container ref={ref} onClose={onClose}>
      <Text variant='regular' type="secondary" fontSize={16} >
        Alterar usuário selecionado
      </Text>

      <S.WrapperInput>
        <Text color="#00000060" variant='regular' type='secondary'>
          Nome do usuário
        </Text>

        <S.Input
          autoCapitalize='none'
          value={search}
          onChangeText={setSearch}
        />
      </S.WrapperInput>

      <S.WrapperButtons>
        <Button
          label='Cancelar'
          tintColor={theme.colors.menuActive}
        />

        <Button
          label='Salvar'
          tintColor={theme.colors.white}
          backgroundColor={theme.colors.menuActive}
          onPress={saveSearch}
        />
      </S.WrapperButtons>
    </S.Container>
  );
}