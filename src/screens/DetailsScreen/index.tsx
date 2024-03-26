import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { IRepository } from '@hooks/repositories.hooks';

import { DetailsBody, DetailsFooter, DetailsScreenHeader } from './sections';

import * as S from './styles';

export function DetailsScreen() {
  const { params } = useRoute();
  const repository = params?.item as IRepository;

  return (
    <S.Container>
      <StatusBar style='light' />

      <DetailsScreenHeader />

      <DetailsBody repository={repository} />

      <DetailsFooter repository={repository} />
    </S.Container>
  );
}