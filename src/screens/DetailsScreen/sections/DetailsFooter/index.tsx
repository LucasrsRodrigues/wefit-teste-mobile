import React from 'react';
import { Feather, Entypo } from '@expo/vector-icons';
import { Button } from '@components/index';
import { useTheme } from 'styled-components/native';
import { IRepository, useRepositories } from '@hooks/repositories.hooks';

interface IDetailsFooterProps {
  repository: IRepository;
}

import * as Linking from 'expo-linking';
import * as S from './styles';


export function DetailsFooter({ repository }: IDetailsFooterProps) {
  const theme = useTheme();
  const { IsFavorite, addFavoriteRepository, removeFavoriteRepository } = useRepositories();
  const isFavorite = IsFavorite(repository.id);

  function openExternalURL() {
    Linking.openURL(repository.html_url);
  }

  function followOrUnfollowAction() {
    if (isFavorite) {
      removeFavoriteRepository(repository);
      return;
    }

    addFavoriteRepository(repository);
  }

  return (
    <S.DetailsFooter>
      <Button
        tintColor={theme.colors.menuActive}
        label='Ver repositório'
        onPress={openExternalURL}
        rightIcon={
          <Feather name="link-2" size={20} color={theme.colors.menuActive} />
        }
      />

      <Button
        label={isFavorite ? "Desfavoritar" : 'Favoritar'}
        backgroundColor={isFavorite ? "transparent" : theme.colors.primary}
        rightIcon={
          <Entypo
            name="star"
            size={20}
            color={theme.colors.dark}
          />
        }
        onPress={followOrUnfollowAction}
        showBorder={isFavorite}

      />
    </S.DetailsFooter>
  );
}