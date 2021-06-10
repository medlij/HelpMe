import { FlatList, View, StyleSheet, Text } from "react-native";
import React from "react";

import axios from "axios";
import ProviderDetails from "../../components/ProviderDetails";
import ReviewItem from "../../components/ReviewItem";

function ProviderDetailsScreen(props) {
  axios.get("http://127.0.0.1:8000/api/review/get/1").then((response) => {
    if (response.status === 200) {
      const reviews = response.data;
      console.log("Review Fetch Successful", reviews);
    } else {
      console.log("Review Fetch Failed");
    }
  });
  return (
    <>
      <ProviderDetails />
      <View style={styles.layout}>
        <Text style={styles.header}>Reviews</Text>

        {/* <FlatList
          data={reviews}
          onPress={() => console.log("review", item)}
          keyExtractor={(review) => review.id.toString()}
          renderItem={({ item }) => (
            <ReviewItem
              title={item.name}
              subTitle={item.review}
              rating={item.rating}
            />
          )}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
  },
  layout: {
    flex: 1,
    marginHorizontal: 10,
  },
});
export default ProviderDetailsScreen;
