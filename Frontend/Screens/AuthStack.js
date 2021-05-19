import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignupScreen"
        options={{ headerShown: false }}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
