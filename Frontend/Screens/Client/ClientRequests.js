import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ClientRequests = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Client Requests</Text>
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
export default ClientRequests;
