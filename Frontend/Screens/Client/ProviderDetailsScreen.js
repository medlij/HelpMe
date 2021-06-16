import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

import reviewsApi from "../../api/reviews";
import ProviderDetails from "../../components/ProviderDetails";
import ReviewItem from "../../components/ReviewItem";
import { useRoute } from "@react-navigation/native";
import useApi from "../../hooks/useApi";
import AddReview from "../../components/AddReview";

function ProviderDetailsScreen() {
  const [noreviews, setNoReviws] = useState(false);
  const [reviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const [t_id] = useState(route.params.id);
  // console.log(route.params);
  const { request: loadReviews } = useApi(reviewsApi.getReviews);

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    setLoading(true);
    const res = await loadReviews(t_id);
    if (res.data[0]) {
      setNoReviws(false);
      for (let i = 0; i < res.data.length; i++) {
        const { data } = await reviewsApi.getName(res.data[i].client_id);

        let x = {
          review: res.data[i].review,
          star_rating: res.data[i].star_rating,
          name: data.name,
        };
        reviews.push(x);
      }
      setLoading(false);
    } else {
      setNoReviws(true);
      setLoading(false);
    }
  };

  return (
    <>
      <ProviderDetails />
      <View style={styles.layout}>
        {!noreviews && <Text style={styles.header}>Reviews</Text>}

        {loading && (
          <Image
            source={require("../../assets/loadstars.gif")}
            style={styles.gif}
          />
        )}
        {noreviews && <Text style={styles.text}>No Reviews yet!</Text>}
        {!loading && (
          <FlatList
            data={reviews}
            renderItem={({ item }) => (
              <ReviewItem
                title={item.name}
                subTitle={item.review}
                rating={item.star_rating}
              />
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gif: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
  },
  layout: {
    flex: 1,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
  },
});
export default ProviderDetailsScreen;
