import React from 'react';

import { Text } from '@components/base/Typography/Text';
import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { splitFullName } from '@utils/index';
import { IRepository, useRepositories } from '@hooks/repositories.hooks';
import { useNavigation } from '@react-navigation/native';

interface IGitCardProps {
  item: IRepository;
  showFavorite?: boolean;
  index: number;
}

import * as S from './styles';
import { SlideInRight, SlideOutLeft, LinearTransition } from 'react-native-reanimated';

const transaction = LinearTransition.springify().delay(200);


export function GitCard({ item, showFavorite = true, index }: IGitCardProps) {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { addFavoriteRepository } = useRepositories();

  return (
    <S.GitCard
      entering={SlideInRight.delay(index * 100)}
      exiting={SlideOutLeft.delay(100)}
      layout={transaction}
      onPress={() => navigate("DetailsScreen", { item })}
    >
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