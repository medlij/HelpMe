import ListItem from "../../components/ListItem";
import { FlatList, View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import ReviewItem from "../../components/ReviewItem";

const reviews = [
  {
    id: 1,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 2,
    name: "Fatima Medlij",
    review:
      "Horrible hate it oh no this is a very long review words word long text longest review ever im explaining my experience yes no ok text text",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 3,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 4,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 5,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 6,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 7,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 8,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 9,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 10,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 11,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 12,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 13,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 14,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
  },
  {
    id: 15,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
  },
];

function ProviderReviews(props) {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.header}>Reviews</Text>

        <FlatList
          data={reviews}
          onPress={() => console.log("review", item)}
          keyExtractor={(review) => review.id.toString()}
          renderItem={({ item }) => (
            <ReviewItem title={item.name} subTitle={item.review} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 20,
  },
  header: {
    color: colors.myblue,
    fontSize: 25,
    fontWeight: "bold",
    borderBottomWidth: 4,
    borderBottomColor: colors.dark_grey,
  },
  layout: {
    flex: 1,
    marginHorizontal: 10,
  },
});
export default ProviderReviews;
