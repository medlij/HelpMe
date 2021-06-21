import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import colors from "../../config/colors";
import Constants from "expo-constants";
import ReviewItem from "../../components/ReviewItem";
import UserContext from "../../id/context";
import idStorage from "../../id/storage";
import useApi from "../../hooks/useApi";
import reviewsApi from "../../api/reviews";

function ProviderReviews(props) {
  const { id, setId } = useContext(UserContext);
  const [noreviews, setNoReviws] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  var temp = [];

  const { request: loadReviews } = useApi(reviewsApi.getReviews);

  useEffect(() => {
    getNames();
  }, []);

  console.log(id);
  const getNames = async () => {
    setLoading(true);
    const id = await idStorage.getId();
    setId(id);
    const res = await loadReviews(id);
    if (res.data[0]) {
      setNoReviws(false);
      for (let i = 0; i < res.data.length; i++) {
        const { data } = await reviewsApi.getName(res.data[i].client_id);

        let x = {
          id: res.data[i].id,
          review: res.data[i].review,
          star_rating: res.data[i].star_rating,
          name: data.name,
        };
        temp.push(x);
        setReviews(temp);
      }
      setLoading(false);
    } else {
      setNoReviws(true);
      setLoading(false);
    }
  };
  return (
    <View style={styles.layout}>
      <Text style={styles.header}>Reviews</Text>

      {loading && (
        <Image
          source={require("../../assets/progress.gif")}
          style={styles.gif}
        />
      )}
      {noreviews && <Text style={styles.text}>No Reviews yet!</Text>}
      {!loading && (
        <FlatList
          data={reviews}
          keyExtractor={(review) => review.id.toString()}
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
  gif: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  header: {
    color: colors.myblue,
    fontSize: 30,
    alignSelf: "center",
    padding: 10,
  },
  layout: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default ProviderReviews;
