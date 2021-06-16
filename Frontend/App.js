import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";

import SplashScreen from "./Screens/SplashScreen";
import UserTypeNav from "./navigation/UserTypeNav";
import AuthStack from "./navigation/AuthStack";
import navigationTheme from "./navigation/navigationTheme";

import ClinetTabNavigator from "./navigation/ClientTabNavigator";
import AuthContext from "./auth/context";
import TypeContext from "./usertype/context";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <TypeContext.Provider value={{ userType, setUserType }}>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              theme={navigationTheme}
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              theme={navigationTheme}
              name="AuthStack"
              component={AuthStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              theme={navigationTheme}
              name="UserTypeNav"
              component={UserTypeNav}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TypeContext.Provider>
    </AuthContext.Provider>
  );
}
