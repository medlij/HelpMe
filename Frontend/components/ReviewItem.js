import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";

function ReviewItem({ title, subTitle, rating }) {
  var stars = [];
  for (let i = rating; i >= 1; i--) {
    stars.push(
      <View key={i}>
        <Fontisto name="star" size={12} color={colors.myyellow} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.ratingcontainer}>{stars}</View>
      </View>
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
  line: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    color: colors.black,
    marginTop: 6,
    fontStyle: "italic",
  },
  title: {
    fontWeight: "600",
  },
  ratingcontainer: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
});

export default ReviewItem;
