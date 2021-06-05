import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClientTabNavigator from "./ClientTabNavigator";
import ProviderTabNavigator from "./ProviderTabNavigator";
import AuthStack from "./AuthStack";
import { useRoute } from "@react-navigation/core";

const Stack = createStackNavigator();

const UserTypeNav = (props) => {
  const route = useRoute();
  let usertype = route.params.usertype;
  if (usertype == "0") {
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
  if (usertype == "1") {
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
