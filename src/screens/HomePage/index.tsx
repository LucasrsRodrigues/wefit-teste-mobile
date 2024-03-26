import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { useTheme } from 'styled-components/native';
import RepoHttpService from '@infrastructure/service/RepoHttpService';
import { FlatList } from 'react-native';
import { GitCard } from '@components/GitCard';
import { StatusBar } from 'expo-status-bar';
import { PageHeader } from '@components/PageHeader';
import { useRepositories } from '@hooks/repositories.hooks';


export function HomePage() {
  const { repositories } = useRepositories();

  return (
    <S.Container>
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