import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./components/Screens/SplashScreen";
import AuthStack from "./components/Screens/AuthStack";
import DrawerNavigator from "./components/Screens/UserTypeNav";
import UserTypeNav from "./components/Screens/UserTypeNav";
import ClinetTabNavigator from "./components/Screens/Client/ClientTabNavigator";
import ProviderTabNavigator from "./components/Screens/Provider/ProviderTabNavigator";
import ProviderCard from "./components/ProviderCard";
import ClientBrowse from "./components/Screens/Client/ClientBrowse";

/// App.js contains main Navigation  ///
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
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
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
