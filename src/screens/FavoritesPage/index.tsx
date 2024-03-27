import React from 'react';

import * as S from './styles';
import { PageHeader } from '@components/PageHeader';
import { useRepositories } from '@hooks/repositories.hooks';
import { GitCard } from '@components/GitCard';

export function FavoritesPage() {
  const { favorites } = useRepositories();

  return (
    <S.Container>
      <PageHeader />

      <S.ListRepositoriesContainer>
        {favorites.map((item, index) => (
          <GitCard key={item.id} item={item} index={index} showFavorite={false} />
        ))}
      </S.ListRepositoriesContainer>

    </S.Container>
  );
}