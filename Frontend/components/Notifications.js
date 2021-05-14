import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>notifications</Text>
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
export default Notifications;
