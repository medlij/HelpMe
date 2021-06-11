import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import colors from "../../config/colors";
import ProviderCard from "../../components/ProviderCard";
import axios from "axios";


export default function ClientBrowse({ navigation: { navigate } }) {
  const route = useRoute();
  let category = route.params.category;

  const [listings, setListings] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/list/" + category).then((response) => {
      setListings(response.data);
    });
  }, []);

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
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
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
                image: item.avatar,
                category: item.category,
                rating: item.rating,
                hourly_rate: item.hourly_rate,
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
    backgroundColor: colors.myblue,
    width: 60,
    marginVertical: 10,
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  inputBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.myblue,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.white,
    marginVertical: 10,
    height: 45,
    color: colors.black,
    flex: 1,
  },
  layout: {
    paddingTop: Constants.statusBarHeight,
    alignContent: "center",
    flex: 1,
    padding: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  search: {
    paddingTop: Constants.statusBarHeight,
  },
  searchbar: {
    flexDirection: "row",
    width: "100%",
  },
});
