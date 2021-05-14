import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/Screens/LoginScreen";
import TabNavigator from "./components/Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./components/Screens/SignupScreen";
import MyStack from "./components/Navigation/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
