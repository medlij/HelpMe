import ListItem from "../../components/ListItem";
import { FlatList, View, StyleSheet} from "react-native";
import React from "react";
import colors from "../../config/colors";
import ReviewItem from "../../components/ReviewItem";

const reviews = [
  {
    id: 1,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 2,
    name: "Fatima Medlij",
    review:
      "Horrible hate it oh no this is a long long long review i will be very detailed and say anything long text long text yes one two three the lazy fox jumped over the i forgot",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 3,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 4,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
    rating: 1,
  },
  {
    id: 5,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
    rating: 2,
  },
  {
    id: 6,
    name: "Rahaf Zaiter",
    review:
      "Horrible hate it oh no this is a long long long review i will be very detailed and say anything long text long text yes one two three the lazy fox jumped over the i forgot",
    image: require("../../assets/default.jpg"),
    rating: 4,
  },
  {
    id: 7,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
    rating: 5,
  },
  {
    id: 8,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 9,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 10,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 11,
    name: "Fatima Medlij",
    review:
      "Horrible hate it oh no this is a long long long review i will be very detailed and say anything long text long text yes one two three the lazy fox jumped over the i forgot",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 12,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 13,
    name: "Elie Kozah",
    review: "Great job wow highly recommend wow",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 14,
    name: "Fatima Medlij",
    review: "Horrible hate it oh no",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
  {
    id: 15,
    name: "Rahaf Zaiter",
    review: "Loved it, good prices and great work!",
    image: require("../../assets/default.jpg"),
    rating: 3,
  },
];

function ProviderReviews(props) {
  return (
    <View style={styles.layout}>
      <FlatList
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
      />
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
    paddingTop: 10,
  },
});
export default ProviderReviews;
