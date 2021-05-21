import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";

import SplashScreen from "./Screens/SplashScreen";
import UserTypeNav from "./navigation/UserTypeNav";
import AuthStack from "./navigation/AuthStack";
import navigationTheme from "./navigation/navigationTheme";

const Stack = createStackNavigator();

export default function App() {

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserTypeNav"
          component={UserTypeNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
