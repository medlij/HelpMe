import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import colors from "../config/colors";

const ChatScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={route.params.image}></Image>
      <Text style={styles.text}>{route.params.person}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    borderBottomColor: colors.dark_grey,
    borderBottomWidth: 4,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.myblue,
    marginRight: 10,
  },
  text: {
    fontSize: 19,
    fontWeight: "400",
    color: colors.black,
  },
});
export default ChatScreen;
