import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StackNavigationTypes } from "./stack.types";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";

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
        <Stack.Screen name="about" component={Home} options={disableHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
