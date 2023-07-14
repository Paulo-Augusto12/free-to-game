import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StackNavigationTypes } from "./stack.types";
import { NavigationContainer } from "@react-navigation/native";

// Screens

import { Home } from "../screens/Home";
import { About } from "../screens/About";

//

export type StackTypes = NativeStackNavigationProp<StackNavigationTypes>;

export type AboutGameProps = NativeStackScreenProps<
  StackNavigationTypes,
  "about"
>;

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  const disableHeader = { headerShown: false };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={disableHeader} />

        <Stack.Screen name="about" component={About} options={disableHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
