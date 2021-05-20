import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

const ChatScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params}</Text>
      <Text>This is the Chat Screen</Text>
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
export default ChatScreen;
