import React, { useState, useEffect } from "react";
import { Rating } from "react-native-ratings";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { useRoute } from "@react-navigation/native";
import useApi from "../hooks/useApi";
import reviewsApi from "../api/reviews";

export default function AddReview() {
  const route = useRoute();
  const t_id = route.params.id;
  console.log(t_id)
  const [text, setText] = useState("");
  const [rating, setRating] = useState(3);
  const [visible, setVisible] = useState(true);
  const ratingCompleted = (rating) => {
    setRating(rating);
  };
  console.log(route.params);
  const handleDone = async () => {
    let data = {
      review: text,
      tasker_id: t_id,
      star_rating: rating,
    };
    data = JSON.stringify(data);
    const result = await reviewsApi.postReview(data);
    console.log(data);
    if (!result.ok) {
      // setUploadVisible(false);
      // return alert("Could not save the review");
    }
    console.log("done", rating, text);
    setVisible(false);
    // postReview(JSON.stringify(data));
  };

  const { request: postReview } = useApi(reviewsApi.postReview);

  return (
    <>
      {visible && (
        <View style={styles.centeredView}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Review</Text>
              <Rating
                type="custom"
                startingValue={2.5}
                onFinishRating={ratingCompleted}
                imageSize={30}
                style={{ paddingVertical: 3 }}
              />

              <TextInput
                style={styles.inputBox}
                multiline={true}
                onChangeText={(text) => setText(text)}
                placeholder="..."
                placeholderTextColor={colors.text_holder}
                blurOnSubmit
              />

              <TouchableOpacity style={styles.button} onPress={handleDone}>
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.myblue,
    width: 80,
    height: 40,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 100,
  },
  inputBox: {
    width: 200,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 10,
    fontSize: 12,
    color: colors.white,
    marginVertical: 10,
    marginBottom: 20,
    height: 140,
    color: colors.black,
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexDirection: "column",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.dark_blue,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
