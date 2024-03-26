import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import * as ExpoSplashScreen from 'expo-splash-screen';
import { SplashScreen } from '@screens/SplashScreen';
import { StackRouter } from '@react-navigation/native';
import { Routes } from '@routes/index';
import { RepositoriesProvider } from '@hooks/repositories.hooks';

ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Roboto_400Regular,
    Roboto_500Medium,
    Inter_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RepositoriesProvider>

        <View style={styles.container} onLayout={onLayoutRootView}>
          <Routes />
        </View>
      </RepositoriesProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
