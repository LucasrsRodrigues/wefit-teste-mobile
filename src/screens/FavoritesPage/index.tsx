import React from 'react';

import * as S from './styles';
import { PageHeader } from '@components/PageHeader';
import { useRepositories } from '@hooks/repositories.hooks';
import { FlatList } from 'react-native';
import { GitCard } from '@components/GitCard';

export function FavoritesPage() {
  const { favorites } = useRepositories();

  return (
    <S.Container>
      <PageHeader />

      <FlatList
        keyExtractor={item => String(item.id)}
        data={favorites}
        renderItem={({ item }) => (
          <GitCard item={item} />
        )}
        ItemSeparatorComponent={() => <S.Divider />}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}