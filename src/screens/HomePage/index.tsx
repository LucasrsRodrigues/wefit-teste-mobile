import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { useTheme } from 'styled-components/native';
import RepoHttpService from '@infrastructure/service/RepoHttpService';
import { FlatList } from 'react-native';
import { GitCard } from '@components/GitCard';

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

export function HomePage() {
  const theme = useTheme();
  const [repos, setRepos] = useState<Array<IReposProps>>([]);

  useEffect(() => {
    (async () => {
      const response = await RepoHttpService.get("appswefit");

      setRepos(response.data);
    })();
  }, []);


  return (
    <S.Container>

      <FlatList
        keyExtractor={item => String(item.id)}
        data={repos}
        renderItem={({ item }) => (
          <GitCard item={item} />
        )}
        ItemSeparatorComponent={() => <S.Divider />}
        showsVerticalScrollIndicator={false}
      />

    </S.Container>
  );
}