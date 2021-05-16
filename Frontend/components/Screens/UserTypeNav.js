import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ClientTabNavigator from "./Client/ClientTabNavigator";
import ProviderTabNavigator from "./Provider/ProviderTabNavigator";

const Stack = createStackNavigator();

let usertype = "Client";
const UserTypeNav = (props) => {
  if (usertype === "Client") {
    return <ClientTabNavigator />;
  }
  if (usertype === "Provider") {
    return <ProviderTabNavigator />;
  }
};

export default UserTypeNav;
