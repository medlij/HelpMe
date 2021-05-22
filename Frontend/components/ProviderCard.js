import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import colors from "../config/colors";

function ProviderCard({ id, name, category, location, image, rating }) {
  var stars = [];
  for (let i = rating; i >= 1; i--) {
    stars.push(
      <View key={i}>
        <Fontisto name="star" size={20} color={colors.myyellow} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textcontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.ratingcontainer}>{stars}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: colors.myblue,
  },
  category: {
    fontSize: 13,
    marginBottom: 8,
  },
  container: {
    backgroundColor: colors.babygrey,
    flexDirection: "row",
    width: "100%",
    maxHeight: 100,
    flex: 1,
    padding: 10,
    marginBottom: 5,
  },
  location: {
    fontSize: 13,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  textcontainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-start",
  },
  ratingcontainer: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
});

export default ProviderCard;
