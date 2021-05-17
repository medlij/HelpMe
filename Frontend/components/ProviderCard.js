import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Path as SvgPath } from "react-native-svg";
import Svg from "react-native-svg";

import colors from "./config/colors";
import svg from "./config/svg";

function ProviderCard({ name, category, location, image, rating }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textcontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.ratingcontainer}>
        <Svg
          style={styles.star}
          fill={colors.myyellow}
          strokeWidth="30"
          stroke={colors.black}
          preserveAspectRatio="none"
          viewBox="0 0 612 792"
        >
          <SvgPath d={svg.star_svg} />
        </Svg>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: colors.dark_grey,
  },
  category: {
    fontSize: 13,
    marginBottom: 8,
  },
  container: {
    backgroundColor: colors.babyblue,
    flexDirection: "row",
    width: "100%",
    maxHeight: 100,
    flex: 1,
    padding: 10,
    marginBottom: 5,
    paddingTop: 10,
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
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
  ratingcontainer: {
    alignContent: "flex-end",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  star: {
    marginLeft: 5,
    width: 22,
    height: 27,
  },
});

export default ProviderCard;
