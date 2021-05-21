import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function ReviewItem({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.babygrey,
    width: "100%",
    flex: 1,
    padding: 10,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.black,
    marginTop: 6,
    fontStyle: "italic",
  },
  title: {
    marginTop: 10,
    fontWeight: "600",
  },
});

export default ReviewItem;
