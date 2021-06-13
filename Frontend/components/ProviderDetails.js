import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProviderDetails() {
  const route = useRoute();
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View style={styles.detailscontainer}>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.textcontainer}>
        <View style={styles.line}>
          <Text style={styles.name}>{route.params.name} </Text>
          <View style={styles.ratingcontainer}>
            <Text style={styles.rating}>{route.params.rating}</Text>
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
                // image: image,
              })
            }
          >
            <MaterialCommunityIcons
              name="email-plus"
              size={28}
              color={colors.myblue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatepicker}>
            <MaterialIcons name="add-task" size={28} color={colors.myblue} />
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              minimumDate={new Date()}
              onChange={(onChange, showTimepicker)}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
    paddingTop: 4,
    textTransform: 'capitalize'
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
    textTransform: 'capitalize',
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textTransform: 'capitalize'
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
