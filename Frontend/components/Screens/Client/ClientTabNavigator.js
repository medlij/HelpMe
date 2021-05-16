import React from "react";
import { StyleSheet } from "react-native";
import ClientHome from "./ClientHome";
import ClientProfile from "./ClientProfile";
import ClientNotifications from "./ClientNotifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "@expo/vector-icons";
import colors from "../../config/colors";
import ClientBrowse from "./ClientBrowse";

const Tab = createBottomTabNavigator();

function ClinetTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        initialParams={{ icon: "home" }}
        component={ClientHome}
      />
      <Tab.Screen name="Browse" component={ClientBrowse} />
      <Tab.Screen name="Profile" component={ClientProfile} />
      <Tab.Screen name="Notifications" component={ClientNotifications} />
    </Tab.Navigator>
  );
}

export default ClinetTabNavigator;

const styles = StyleSheet.create({
  wrapper: {
    // position:'absolute',
    position: "relative",
    bottom: 1,
    width: 20,
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    // width:250,
    // borderRadius:100,
  },
});
