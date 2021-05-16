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
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View>
        <Text style={styles.rating}>{rating}</Text>
        <Svg
          fill={colors.myyellow}
          preserveAspectRatio="none"
          viewBox="0 0 612 792"
        >
          <SvgPath d={svg.star_svg} />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    color: colors.black,
  },
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  location: {
    color: colors.black,
  },
  name: {
    fontWeight: "500",
  },
  rating: {
    color: colors.black,
  },
});

export default ProviderCard;
