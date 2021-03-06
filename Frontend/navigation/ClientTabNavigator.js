import React from "react";
import ClientHome from "../Screens/Client/ClientHome";
import ClientProfile from "../Screens/Client/ClientProfile";
import ClientNotifications from "../Screens/Client/ClientRequests";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "@expo/vector-icons";
import ClientBrowse from "../Screens/Client/ClientBrowse";
import MessagesScreen from "../Screens/MessagesScreen";
import ProviderDetailsScreen from "../Screens/Client/ProviderDetailsScreen";
import ChatScreen from "../Screens/ChatScreen";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import navigationTheme from "./navigationTheme";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const CHomeStack = () => {
  return (
    <Stack.Navigator theme={navigationTheme}>
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
      <Stack.Screen
        name="ProviderDetailsScreen"
        options={{ title: " " }}
        component={ProviderDetailsScreen}
      />
      <Stack.Screen
        name="ChatScreen"
        options={({ route }) => ({
          title: route.params.person,
        })}
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};
const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesScreen"
        options={{ title: "Messages" }}
        component={MessagesScreen}
      />
      <Stack.Screen
        name="ChatScreen"
        options={({ route }) => ({
          title: route.params.person,
        })}
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};
function ClinetTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: colors.white,
        activeBackgroundColor: colors.white,
        activeTintColor: colors.myblue,
        inactiveTintColor: colors.dark_grey,
      }}
    >
      <Tab.Screen
        name="Home"
        component={CHomeStack}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={ClientNotifications}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email-send" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ClientProfile}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-multiple"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ClinetTabNavigator;
