import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import colors from "../../config/colors";
import ProviderCard from "../../components/ProviderCard";

const listings = [
  {
    id: 1,
    image: require("../../assets/default.jpeg"),
    name: "Mazen Pharmacy",
    location: "Beirut",
    category: "Fixing",
    rating: 3.4,
  },
  {
    id: 2,
    image: require("../../assets/default.jpg"),
    name: "Elie Kozah",
    location: "Beirut",
    category: "Moving",
    rating: 2.8,
  },
  {
    id: 3,
    image: require("../../assets/default2.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Cleaning",
    rating: 4.3,
  },
  {
    id: 4,
    image: require("../../assets/default3.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Other",
    rating: 4.3,
  },
  {
    id: 5,
    image: require("../../assets/default3.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Cleaning",
    rating: 4.3,
  },
  {
    id: 6,
    image: require("../../assets/default2.jpeg"),
    name: "Mazen Pharmacy",
    location: "Beirut",
    category: "Fixing",
    rating: 3.4,
  },
  {
    id: 7,
    image: require("../../assets/default.jpeg"),
    name: "Elie Kozah",
    location: "Beirut",
    category: "Moving",
    rating: 2.8,
  },
  {
    id: 8,
    image: require("../../assets/default2.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Cleaning",
    rating: 4.3,
  },
  {
    id: 9,
    image: require("../../assets/default3.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Other",
    rating: 4.3,
  },
  {
    id: 10,
    image: require("../../assets/default4.jpeg"),
    name: "Fatima Medlij",
    location: "Beirut",
    category: "Cleaning",
    rating: 4.3,
  },
];
export default function ClientBrowse({ navigation: { navigate } }) {
  const route = useRoute();
  return (
    <View style={styles.layout}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search Providers"
          placeholderTextColor={colors.text_holder}
          color={colors.black}
        />
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="account-search"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {/* <Text>category is {route.params.category}</Text> */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate("ProviderDetailsScreen", {
                name: item.name,
                id: item.id,
                location: item.location,
                image: item.image,
                category: item.category,
                rating: item.rating,
              })
            }
          >
            <ProviderCard
              name={item.name}
              location={item.location}
              category={item.category}
              image={item.image}
              rating={item.rating}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark_grey,
    width: 70,
    marginVertical: 10,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
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
  inputBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.dark_grey,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.white,
    marginVertical: 10,
    height: 50,
    marginBottom: 20,
    color: colors.black,
    flex: 1,
  },
  layout: {
    alignContent: "center",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
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
  search: {
    paddingTop: 10,
    padding: 10,
  },
  searchbar: {
    flexDirection: "row",
    width: "100%",
  },
  star: {
    marginLeft: 5,
    width: 22,
    height: 27,
  },
});
