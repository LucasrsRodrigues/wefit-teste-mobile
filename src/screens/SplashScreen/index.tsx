import React, { useEffect } from 'react';
import Logo from "@assets/logo.svg";
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const time = setTimeout(() => {
      navigation.navigate("TabRoutes");
    }, 2000);
    return () => clearTimeout(time);
  }, [navigation]);

  return (
    <S.Container>
      <Logo />
    </S.Container>
  );
}