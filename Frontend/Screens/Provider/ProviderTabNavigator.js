import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProviderHome from "./ProviderHome";
import ProviderProfile from "./ProviderProfile";
import ProviderNotifications from "./ProviderNotifications";

const Tab = createBottomTabNavigator();

function ClinetTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProviderHome" component={ProviderHome} />
      <Tab.Screen name="Profile" component={ProviderProfile} />
      <Tab.Screen name="Notifications" component={ProviderNotifications} />
    </Tab.Navigator>
  );
}

export default ClinetTabNavigator;
