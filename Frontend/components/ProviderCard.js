import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import colors from "../config/colors";

function ProviderCard({
  id,
  name,
  category,
  location,
  imageURL,
  rating,
  hourly_rate,
}) {
  var stars = [];
  for (let i = rating; i >= 1; i--) {
    stars.push(
      <View key={i}>
        <Fontisto name="star" size={18} color={colors.myyellow} />
      </View>
    );
  } 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri : imageURL}} />
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
    width: 60,
    height: 60,
  },
  category: {
    fontSize: 12,
    marginBottom: 3,
    textTransform: 'capitalize'
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    width: "100%",
    maxHeight: 80,
    flex: 1,
    padding: 10,
    borderBottomColor: colors.babygrey,
    borderBottomWidth: 1,
  },
  location: {
    fontSize: 12,
    textTransform: 'capitalize'
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    textTransform: 'capitalize'
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
