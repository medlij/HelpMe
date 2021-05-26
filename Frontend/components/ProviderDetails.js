import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
        <View style={styles.line}>
          <Text style={styles.hourly_rate}>
            {route.params.hourly_rate} LBP/hour
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChatScreen", {
                person: name,
                image: image,
              })
            }
          >
            <MaterialIcons
              style={styles.icon}
              name="email"
              size={25}
              color={colors.myblue}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
    paddingTop: 4,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  detailscontainer: {
    flexDirection: "row",
    padding: 10,
    maxHeight: 120,
  },
  icon: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.myblue,
    marginRight: 20,
  },
  hourly_rate: {
    flexDirection: "row",
    flex: 1,
    fontWeight: "700",
    color: colors.black,
  },
  line: {
    paddingTop: 5,
    flexDirection: "row",
  },
  location: {
    fontSize: 14,
    paddingTop: 4,
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
    marginRight: 4,
  },
  ratingcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
