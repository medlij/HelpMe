import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProviderProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Provider Profile </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ProviderProfile;
