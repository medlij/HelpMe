import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native";
import ClientTabNavigator from "./ClientTabNavigator";
import ProviderTabNavigator from "./ProviderTabNavigator";
import AuthStack from "./AuthStack";
import { useContext } from "react";
import TypeContext from "../usertype/context";
import typeStorage from "../usertype/storage";

const Stack = createStackNavigator();

const UserTypeNav = () => {
  const [loading, setLoading] = useState(true);

  const { usertype, setUserType } = useContext(TypeContext);
  console.log(usertype);
  const [type, setType] = useState();

  const restoreType = async () => {
    setLoading(true);
    const usertype = await typeStorage.getUserType();
    if (!usertype) return console.log("fashal bestie kys <3");
    setUserType(usertype);
    setType(usertype);
    setLoading(false);
  };

    useEffect(() => {
      restoreType();
    }, []);
  

  if (loading) {
    return <ActivityIndicator visible={loading} />;
  } else {
    if (type == 0) {
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
    if (type == 1) {
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
  }
};

export default UserTypeNav;
