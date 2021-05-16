import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ProviderCard from "../../ProviderCard";

const ClientBrowse = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProviderCard/>
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
export default ClientBrowse;
