import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClientTabNavigator from "./ClientTabNavigator";
import ProviderTabNavigator from "./ProviderTabNavigator";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

let usertype = "Provider";
const UserTypeNav = (props) => {
  if (usertype === "Client") {
    return (
      <Stack.Navigator initialRouteName="ClientTabNavigator">
        <Stack.Screen
          name="ClientTabNavigator"
          component={ClientTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  if (usertype === "Provider") {
    return (
      <Stack.Navigator initialRouteName="ProviderTabNavigator">
        <Stack.Screen
          name="ProviderTabNavigator"
          component={ProviderTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

export default UserTypeNav;
