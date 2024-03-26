import React from 'react';

import * as S from './styles';
import { Text } from '@components/base/Typography/Text';
import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { splitFullName } from '@utils/index';

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
}


export function GitCard({ item }: IGitCardProps) {
  const theme = useTheme();

  return (
    <S.GitCard>
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
        <S.FavouriteButton>
          <Entypo name="star" size={20} color={theme.colors.primary} />

          <Text color={theme.colors.primary} variant='bold'>
            Favoritar
          </Text>
        </S.FavouriteButton>

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