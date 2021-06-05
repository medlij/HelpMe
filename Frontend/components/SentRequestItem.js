import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SentRequestItem({ provider_name, provider_rate, date_time, status }) {
  var box = [];
  if (status == "Accepted") {
    box.push(
      <View key="accepted" style={styles.accepted}>
        <FontAwesome name="check-circle" size={20} color="white" />
        <Text style={styles.box_text}>Accepted</Text>
      </View>
    );
  }
  if (status == "Rejected") {
    box.push(
      <View key="rejected" style={styles.rejected}>
        <FontAwesome5 name="exclamation-circle" size={20} color="white" />
        <Text style={styles.box_text}>Rejected</Text>
      </View>
    );
  }
  if (status == "Pending") {
    box.push(
      <View key="pending" style={styles.pending}>
        <MaterialCommunityIcons
          name="dots-horizontal-circle"
          size={20}
          color="white"
        />
        <Text style={styles.box_text}>Pending</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View>
          <Text style={styles.provider_name}>{provider_name}</Text>
          <Text style={styles.provider_rate}>{provider_rate} LBP/hour</Text>
          <Text style={styles.provider_rate}>{date_time}</Text>
        </View>
        <View>{box}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accepted: {
    backgroundColor: colors.green,
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    alignContent: "center",
  },
  box_text: {
    color: colors.white,
    fontWeight: "bold",
    marginHorizontal: 3,
    alignSelf: "center",
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
  },
  pending: {
    backgroundColor: colors.grey,
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    alignContent: "center",
  },
  provider_rate: {
    color: colors.text_holder,
    marginVertical: 5,
    fontSize: 14,
    fontWeight: "700",
  },
  provider_name: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
  rejected: {
    backgroundColor: colors.red,
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    alignContent: "center",
  },
});

export default SentRequestItem;
