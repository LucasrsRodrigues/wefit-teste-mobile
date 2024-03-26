import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "@screens/SplashScreen";
import { TabRoutes } from "./tab.routes";
import { DetailsScreen } from "@screens/DetailsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="SplashScreen"
        component={SplashScreen}
      />

      <Screen
        name="TabRoutes"
        component={TabRoutes}
      />

      <Screen
        name="DetailsScreen"
        component={DetailsScreen}
      />
    </Navigator>
  )
}