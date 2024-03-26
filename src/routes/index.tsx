import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StackRoutes } from "./stack.routes";

export function Routes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  )
}