import React from 'react';

import * as S from './styles';
import { FlatList } from 'react-native';
import { GitCard } from '@components/GitCard';
import { StatusBar } from 'expo-status-bar';
import { PageHeader } from '@components/PageHeader';
import { useRepositories } from '@hooks/repositories.hooks';

import logoPNG from "@assets/background-logo.png";

export function HomePage() {
  const { repositories } = useRepositories();

  return (
    <S.Container source={logoPNG} resizeMode='center'>
      <StatusBar
        translucent
        style='dark'
      />

      <PageHeader />

      <FlatList
        keyExtractor={item => String(item.id)}
        data={repositories}
        renderItem={({ item }) => (
          <GitCard item={item} />
        )}
        ItemSeparatorComponent={() => <S.Divider />}
        showsVerticalScrollIndicator={false}
      />

    </S.Container>
  );
}