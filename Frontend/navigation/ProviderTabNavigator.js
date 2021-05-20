import React from "react";
import ClientProfile from "../Screens/Client/ClientProfile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "@expo/vector-icons";
import MessagesScreen from "../Screens/MessagesScreen";
import ChatScreen from "../Screens/ChatScreen";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import ProviderNotifications from "../Screens/Provider/ProviderNotifications";
import ProviderProfile from "../Screens/Provider/ProviderProfile";
import ProviderReviews from "../Screens/Provider/ProviderReviews";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesScreen"
        options={{ headerShown: false }}
        component={MessagesScreen}
      />
      <Stack.Screen
        name="ChatScreen"
        options={{ title: "Chat Screen" }}
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};
function ProviderTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: colors.myblue,
        activeBackgroundColor: colors.myblue,
        activeTintColor: colors.white,
        inactiveTintColor: colors.dark_blue,
      }}
    >
      <Tab.Screen
        name="Reviews"
        component={ProviderReviews}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="rate-review" size={26} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={ProviderNotifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email-send" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProviderProfile}
        options={{
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
