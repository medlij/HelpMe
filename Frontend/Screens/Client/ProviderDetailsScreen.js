import { FlatList, View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";

// import axios from "axios";
import reviewsApi from "../../api/reviews";
import ProviderDetails from "../../components/ProviderDetails";
import ReviewItem from "../../components/ReviewItem";
import { useRoute } from "@react-navigation/native";

function ProviderDetailsScreen() {
  const route = useRoute();
  const [t_id] = useState(route.params.id);
  const [reviews, setReviews] = useState([]);
  const [c_id, setC_id] = useState([]);
  // const [clientname, setClientName] = useState("");

  useEffect(() => {
    loadReviews();
    fun();
  }, []);

  const loadReviews = async () => {
    const response = await reviewsApi.getReviews(t_id);
    setReviews(response.data);
  };

  async function fun() {
    for (let i = 0; i < reviews.length; i++) {
      setC_id(response.data[i].client_id);
      console.log(c_id);
    }
  }

  return (
    <>
      <ProviderDetails />
      <View style={styles.layout}>
        <Text style={styles.header}>Reviews</Text>

        <FlatList
          data={reviews}
          keyExtractor={(review) => review.id.toString()}
          renderItem={({ item }) => (
            <ReviewItem
              title={item.client_id}
              subTitle={item.review}
              rating={item.star_rating}
            />
          )}
        />
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
