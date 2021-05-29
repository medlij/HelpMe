import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function RequestItem({ name, location, date_time }) {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.text_container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.text}>{date_time}</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.accepted}>
            <FontAwesome name="check-circle" size={22} color="white" />
            <Text style={styles.box_text}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejected}>
            <FontAwesome5 name="exclamation-circle" size={22} color="white" />
            <Text style={styles.box_text}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accepted: {
    backgroundColor: colors.green,
    flexDirection: "row",
    padding: 5,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginVertical: 8,
  },
  box: {
    alignContent: "center",
    justifyContent: "space-evenly",
    flex: 0.8,
  },
  box_text: {
    color: colors.white,
    fontWeight: "bold",
    marginHorizontal: 3,
    alignSelf: "center",
    fontSize: 18,
  },
  container: {
    backgroundColor: colors.babygrey,
    flex: 1,
    padding: 10,
    marginBottom: 8,
    borderRadius: 15,
    height: 110,
  },
  line: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  pending: {
    backgroundColor: "grey",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: colors.text_holder,
    marginVertical: 5,
    fontSize: 14,
    fontWeight: "700",
  },
  text_container: {
    flex: 1.5,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
  rejected: {
    backgroundColor: colors.red,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 15,
    marginVertical: 8,
  },
});

export default RequestItem;
