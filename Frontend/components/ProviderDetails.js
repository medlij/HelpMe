import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function ProviderDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const name = route.params.name;
  const image = route.params.image;
  return (
    <View style={styles.detailscontainer}>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.textcontainer}>
        <View style={styles.line}>
          <Text style={styles.name}>{route.params.name} </Text>
          <View style={styles.ratingcontainer}>
            <Text style={styles.rating}>{route.params.rating}</Text>
            <Fontisto name="star" size={20} color={colors.myyellow} />
          </View>
        </View>
        <Text style={styles.category}>{route.params.category}</Text>
        <Text style={styles.location}>{route.params.location}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatScreen", {
              person: name,
              image: image,
            })
          }
        >
          <MaterialIcons name="email" size={24} color={colors.myblue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    paddingTop: 5,
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
  line: {
    paddingTop: 5,
    flexDirection: "row",
  },
  location: {
    fontSize: 16,
  },
  name: {
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
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 3,
  },
  ratingcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
