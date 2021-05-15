import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

const ProviderHome = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Provider Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProviderHome;
