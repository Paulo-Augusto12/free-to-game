import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Navigation = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Navigation.Navigator screenOptions={{ headerShown: false }}>
          <Navigation.Screen name="homePage" component={Home} />
        </Navigation.Navigator>
      </NavigationContainer>
    </>
  );
}
