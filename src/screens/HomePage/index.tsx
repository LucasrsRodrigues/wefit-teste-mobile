import React from 'react';
import { Text } from '@components/base/Typography/Text';

import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { Entypo, Octicons } from '@expo/vector-icons';
export function HomePage() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.GitCard>
        <S.GitCardHeader>
          <Text>
            appswefit/create-react-app
          </Text>

          <S.GitCardHeaderImage
            source={{ uri: "https://avatars.githubusercontent.com/u/58940345?v=4" }}
          />
        </S.GitCardHeader>

        <S.GitCardBody>
          <Text color={theme.colors.paragraph}>
            Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
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
              0
            </Text>
          </S.StarsCount>

          <S.PrimalLanguage>
            <S.DotLanguage />

            <Text
              color={theme.colors.paragraph}
            >
              Typescript
            </Text>
          </S.PrimalLanguage>
        </S.GitCardFooter>
      </S.GitCard>
    </S.Container>
  );
}