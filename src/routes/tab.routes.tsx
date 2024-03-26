import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomePage } from "@screens/HomePage";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { FavoritesPage } from "@screens/FavoritesPage";

const { Navigator, Screen } = createBottomTabNavigator();


export function TabRoutes() {
  const theme = useTheme();

  const screensOptionsStyle: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.menuActive,
    tabBarInactiveTintColor: theme.colors.menuInactive,
    tabBarIconStyle: {
      width: 20,
      height: 20
    },
    tabBarLabelStyle: {
      fontFamily: theme.fonts.secondary.regular,
      fontSize: 14,
    },
    tabBarStyle: {
      padding: 8
    }
  }

  return (
    <Navigator>
      <Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: "Repositórios",
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="github" size={size} color={color} />
          ),
          ...screensOptionsStyle
        }}
      />

      <Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, focused, size }) => (
            <Entypo name="star" size={size} color={color} />
          ),
          ...screensOptionsStyle
        }}
      />
    </Navigator>
  )
}

