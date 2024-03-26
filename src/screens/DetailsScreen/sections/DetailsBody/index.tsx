import React from 'react';

import { Text } from '@components/index';
import { splitFullName } from '@utils/index';
import { IRepository } from '@hooks/repositories.hooks';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

interface IDetailsBodyProps {
  repository: IRepository;
}

export function DetailsBody({ repository }: IDetailsBodyProps) {
  const theme = useTheme();

  return (
    <S.DetailsBody>
      <S.DetailsName>
        <Text fontSize={16}>
          {splitFullName(repository.full_name)[0]}
        </Text>

        <Text fontSize={16} variant='bold'>
          /{splitFullName(repository.full_name)[1]}
        </Text>
      </S.DetailsName>

      <Text
        color={theme.colors.paragraph}
        fontSize={16}
      >
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
  );
}