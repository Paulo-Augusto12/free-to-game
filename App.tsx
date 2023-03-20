import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { About } from "./src/screens/About";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/NavRoutes/Routes";
export default function App() {
  const Navigation = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Navigation.Navigator screenOptions={{ headerShown: false }}>
          <Navigation.Screen name="home" component={Home} />
          <Navigation.Screen name="about" component={About} />
        </Navigation.Navigator>
      </NavigationContainer>
    </>
  );
}
