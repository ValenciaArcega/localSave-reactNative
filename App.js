import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "./screens/SignIn";
import { SignUp } from './screens/SignUp';
import { Home } from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false, animation: "fade" }}></Stack.Screen>
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false, animation: "fade" }}></Stack.Screen>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false, animation: "fade" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}