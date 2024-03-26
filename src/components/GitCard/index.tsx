import React from 'react';

import * as S from './styles';
import { Text } from '@components/base/Typography/Text';
import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { splitFullName } from '@utils/index';
import { useRepositories } from '@hooks/repositories.hooks';
import { useNavigation } from '@react-navigation/native';

interface IReposProps {
  id: number;
  full_name: string;
  description?: string;
  owner: {
    avatar_url: string;
  }
  stargazers_count: number;
  language: string;
  html_url: string;
}

interface IGitCardProps {
  item: IReposProps;
  showFavorite?: boolean;
}


export function GitCard({ item, showFavorite = true }: IGitCardProps) {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { addFavoriteRepository } = useRepositories();

  return (
    <S.GitCard onPress={() => navigate("DetailsScreen", { item })}>
      <S.GitCardHeader>
        <S.GitCardHeaderName>
          <Text>
            {splitFullName(item.full_name)[0]}
          </Text>

          <Text variant='bold'>
            /{splitFullName(item.full_name)[1]}
          </Text>
        </S.GitCardHeaderName>

        <S.GitCardHeaderImage
          source={{ uri: item.owner.avatar_url }}
        />
      </S.GitCardHeader>

      <S.GitCardBody>
        <Text color={theme.colors.paragraph}>
          {item.description ?? "Sem descrição"}
        </Text>
      </S.GitCardBody>

      <S.GitCardFooter>

        {showFavorite ? (
          <S.FavouriteButton
            onPress={() => addFavoriteRepository(item)}
          >
            <Entypo name="star" size={20} color={theme.colors.primary} />

            <Text color={theme.colors.primary} variant='bold'>
              Favoritar
            </Text>
          </S.FavouriteButton>
        ) : null}


        <S.StarsCount>
          <Entypo
            name="star"
            size={20}
            color={theme.colors.primary}
          />

          <Text
            color={theme.colors.paragraph}
          >
            {item.stargazers_count}
          </Text>
        </S.StarsCount>

        <S.PrimalLanguage>
          <S.DotLanguage />

          <Text
            color={theme.colors.paragraph}
          >
            {item.language || "Não informada"}
          </Text>
        </S.PrimalLanguage>

      </S.GitCardFooter>
    </S.GitCard>
  );
}