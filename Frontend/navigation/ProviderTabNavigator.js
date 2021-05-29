import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "@expo/vector-icons";
import MessagesScreen from "../Screens/MessagesScreen";
import ChatScreen from "../Screens/ChatScreen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProviderProfile from "../Screens/Provider/ProviderProfile";
import ProviderReviews from "../Screens/Provider/ProviderReviews";
import ProviderRequests from "../Screens/Provider/ProviderRequests";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

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
function ProviderTabNavigator() {
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
        name="Requests"
        component={ProviderRequests}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-receive"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={ProviderReviews}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="rate-review" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProviderProfile}
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

export default ProviderTabNavigator;
