import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";

import SplashScreen from "./Screens/SplashScreen";
import UserTypeNav from "./navigation/UserTypeNav";
import AuthStack from "./navigation/AuthStack";
import navigationTheme from "./navigation/navigationTheme";

import AuthContext from "./auth/context";
import TypeContext from "./usertype/context";
import UserContext from "./id/context";
import authStorage from "./auth/storage";
import jwtDecode from "jwt-decode";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  const [id, setId] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
    }

  useEffect(() => {
    restoreToken()
  }, []);

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
        <UserContext.Provider value ={{ id, setId }}>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator >
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
        </UserContext.Provider>
      </TypeContext.Provider>
    </AuthContext.Provider>
  );
}
