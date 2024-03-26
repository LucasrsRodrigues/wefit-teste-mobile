import React, { useEffect } from 'react';
import * as Linking from 'expo-linking';
import * as S from './styles';
import { Text } from '@components/base/Typography/Text';
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IRepository, useRepositories } from '@hooks/repositories.hooks';
import { splitFullName } from '@utils/index';
import { Feather, Entypo } from '@expo/vector-icons';
import { Button } from '@components/base/Button';

export function DetailsScreen() {
  const theme = useTheme();
  const { IsFavorite, addFavoriteRepository, removeFavoriteRepository } = useRepositories();
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const repository = params?.item as IRepository;

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
    <S.Container>
      <StatusBar style='light' />

      <S.DetailsScreenHeader>

        <S.BackButton onPress={goBack}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
          />
        </S.BackButton>

        <Text color={theme.colors.white} type='secondary' variant='medium' fontSize={20}>
          Detalhes
        </Text>
      </S.DetailsScreenHeader>

      <S.DetailsBody>
        <S.DetailsName>
          <Text fontSize={16}>
            {splitFullName(repository.full_name)[0]}
          </Text>

          <Text fontSize={16} variant='bold'>
            /{splitFullName(repository.full_name)[1]}
          </Text>
        </S.DetailsName>

        <Text color={theme.colors.paragraph} fontSize={16}>
          {repository.description}
        </Text>

        <S.PrimalLanguage>
          <S.DotLanguage />

          <Text
            color={theme.colors.paragraph}
            fontSize={14}
          >
            {repository.language || "Não informada"}
          </Text>
        </S.PrimalLanguage>
      </S.DetailsBody>

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
    </S.Container>
  );
}