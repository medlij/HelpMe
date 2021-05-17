import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "./config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.babyblue,
    flexDirection: "row",
    width: "100%",
    maxHeight: 80,
    flex: 1,
    padding: 10,
    marginBottom: 5,
    paddingTop: 10,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: colors.dark_grey,
    marginRight: 20,
  },
  subTitle: {
    color: colors.dark_grey,
    marginTop: 6,
  },
  title: {
    marginTop: 10,
    fontWeight: "500",
  },
});

export default ListItem;
