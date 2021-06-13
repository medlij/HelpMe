import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator
} from "react-native";


import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import colors from "../../config/colors";
import listingsApi from "../../api/listings";
import ProviderCard from "../../components/ProviderCard";
// import ActivityIndicator from "../../components/ActivityIndicator";

export default function ClientBrowse({ navigation: { navigate } }) {
  const route = useRoute();
  const [category] = useState(route.params.category);
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings(category);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

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
      {error && (
        <>
          <Text style={styles.error}>Couldn't get Providers!</Text>
          <TouchableOpacity onPress={loadListings} style={styles.errorbutton}>
            <Text style={styles.errorbuttontext}> RETRY</Text>
          </TouchableOpacity>
        </>
      )}

      <ActivityIndicator animating={loading} />
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
                imageURL: item.avatar,
                category: category,
                rating: item.rating,
                hourly_rate: item.hourly_rate,
              })
            }
          >
            <ProviderCard
              name={item.name}
              location={item.location}
              category={category}
              imageURL={item.avatar}
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
  error: {
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  errorbutton: {
    backgroundColor: colors.myblue,
    alignSelf: "center",
    padding: 10,
  },
  errorbuttontext: {
    color: colors.white,
    fontWeight: "bold",
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
