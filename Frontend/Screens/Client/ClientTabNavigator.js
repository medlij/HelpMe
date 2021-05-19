import React from "react";
import { StyleSheet } from "react-native";
import ClientHome from "./ClientHome";
import ClientProfile from "./ClientProfile";
import ClientNotifications from "./ClientRequests";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "@expo/vector-icons";
import ClientBrowse from "./ClientBrowse";
import MessagesScreen from "../MessagesScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const CHomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={ClientHome}
      />
      <Stack.Screen
        name="Browse"
        options={{ headerShown: false }}
        component={ClientBrowse}
      />
    </Stack.Navigator>
  );
};
function ClinetTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        initialParams={{ icon: "home" }}
        component={CHomeStack}
      />
      <Tab.Screen name="Requests" component={ClientNotifications} />
      <Tab.Screen name="Profile" component={ClientProfile} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default ClinetTabNavigator;

