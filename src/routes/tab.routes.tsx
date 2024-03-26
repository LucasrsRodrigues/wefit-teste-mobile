import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomePage } from "@screens/HomePage";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator>
      <Screen
        name="HomePage"
        component={HomePage}
      />

      <Screen
        name="Favorites"
        component={HomePage}
      />
    </Navigator>
  )
}

