import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Path as SvgPath } from "react-native-svg";
import Svg from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import svg from "../config/svg";
// import { useNavigation } from "@react-navigation/native";

export default function ProviderDetails() {
  const route = useRoute();
  // const navigation = useNavigation();
  return (
    <View style={styles.detailscontainer}>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.textcontainer}>
        <View style={styles.container}>
          <Text style={styles.name}>{route.params.name} </Text>
          <View style={styles.ratingcontainer}>
            <Text style={styles.rating}>{route.params.rating}</Text>
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
          </View>
        </View>
        <Text style={styles.category}>{route.params.category}</Text>
        <Text style={styles.location}>{route.params.location}</Text>
        <TouchableOpacity onPress={() => console.log(route.params)}>
          <MaterialCommunityIcons
            name="email-send"
            size={24}
            color={colors.myblue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  detailscontainer: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.myblue,
    marginRight: 20,
  },
  location: {
    fontSize: 16,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  textcontainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingcontainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  star: {
    marginLeft: 8,
    width: 20,
    height: 25,
  },
});
