import React from "react";
import ClientHome from "./ClientHome";
import ClientProfile from "./ClientProfile";
import ClientNotifications from "./ClientNotifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function ClinetTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ClientHome} />
      <Tab.Screen name="Profile" component={ClientProfile} />
      <Tab.Screen name="Notifications" component={ClientNotifications} />
    </Tab.Navigator>
  );
}

export default ClinetTabNavigator;
