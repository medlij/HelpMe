import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddReview from "./AddReview";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

export default function ProviderDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(route.params.rating);

  // console.log(route.params.id);
  const { data, request: getId } = useApi(listingsApi.getTaskerId);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await getId(route.params.id);
    if ((res.status = 200)) {
      const { data } = await listingsApi.getProviderDetails(res.data);
      setRating(data.rating);
    }
  };

  const handleReview = () => {
    setVisible(true);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date, time);
    hideDatePicker();
  };
  return (
    <>
      <View style={styles.detailscontainer}>
        <Image style={styles.image} source={{ uri: route.params.imageURL }} />
        <View style={styles.textcontainer}>
          <View style={styles.line}>
            <Text style={styles.name}>{route.params.name} </Text>
            <View style={styles.ratingcontainer}>
              <Text style={styles.rating}>{rating}</Text>
              <Fontisto name="star" size={20} color={colors.myyellow} />
            </View>
          </View>
          <Text style={styles.category}>{route.params.category}</Text>
          <Text style={styles.location}>{route.params.location}</Text>
          <View style={styles.line}>
            <Text style={styles.hourly_rate}>
              {route.params.hourly_rate} LBP/hour
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  person: name,
                  // imageURL: image,
                })
              }
            >
              <MaterialCommunityIcons
                name="email-plus"
                size={28}
                color={colors.myblue}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReview}>
              <MaterialIcons
                name="rate-review"
                size={28}
                color={colors.myblue}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showDatePicker}>
              <MaterialIcons name="add-task" size={28} color={colors.myblue} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={show}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
      </View>
      {visible && <AddReview />}
    </>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
    paddingTop: 4,
    textTransform: "capitalize",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  detailscontainer: {
    flexDirection: "row",
    padding: 10,
    maxHeight: 120,
  },
  icon: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.myblue,
    marginRight: 20,
  },
  hourly_rate: {
    flexDirection: "row",
    flex: 1,
    fontWeight: "700",
    color: colors.black,
  },
  line: {
    paddingTop: 5,
    flexDirection: "row",
  },
  location: {
    fontSize: 14,
    paddingTop: 4,
    textTransform: "capitalize",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textTransform: "capitalize",
  },
  textcontainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 4,
  },
  ratingcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
