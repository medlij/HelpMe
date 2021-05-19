import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete" size={30} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.alert,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    maxHeight: 80,
    padding: 10,
    marginBottom: 5,
    paddingTop: 10,
  },
});

export default ListItemDeleteAction;
