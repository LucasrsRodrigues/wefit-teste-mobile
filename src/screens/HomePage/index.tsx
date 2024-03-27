import React from 'react';

import { GitCard } from '@components/GitCard';
import { StatusBar } from 'expo-status-bar';
import { PageHeader } from '@components/PageHeader';
import { useRepositories } from '@hooks/repositories.hooks';

import logoPNG from "@assets/background-logo.png";
import * as S from './styles';

export function HomePage() {
  const { repositories } = useRepositories();

  return (
    <S.Container source={logoPNG} resizeMode='center'>
      <StatusBar
        translucent
        style='dark'
      />

      <PageHeader />

      <S.ListRepositoriesContainer>
        {repositories.map((item, index) => (
          <GitCard key={item.id} item={item} index={index} />
        ))}
      </S.ListRepositoriesContainer>
    </S.Container>
  );
}