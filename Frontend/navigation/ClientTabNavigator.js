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

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const CHomeStack = () => {
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
      <Stack.Screen
        name="ProviderDetailsScreen"
        options={{ title: "Provider Details"}}
        component={ProviderDetailsScreen}
      />
      <Stack.Screen
        name="ChatScreen"
        options={{ headerShown: true }}
        component={ChatScreen}
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
