import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import SentRequestItem from "../../components/SentRequestItem";
import Constants from "expo-constants";

const data = [
  {
    id: 1,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm ",
    status: "Pending",
  },
  {
    id: 2,
    name: "Fatima Medlij",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm",
    status: "Accepted",
  },
  {
    id: 3,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm ",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm",
    status: "Pending",
  },
  {
    id: 5,
    name: "Fatima Medlij",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm ",
    status: "Accepted",
  },
  {
    id: 6,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00 pm",
    status: "Rejected",
  },
  {
    id: 7,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm",
    status: "Pending",
  },
  {
    id: 8,
    name: "Fatima Medlij",
    hourly_rate: 50000,
    time: "14/12/2021 5:00pm ",
    status: "Accepted",
  },
  {
    id: 9,
    name: "Elie Kozah",
    hourly_rate: 50000,
    time: "14/12/2021 5:00 pm",
    status: "Rejected",
  },
];

const ClientRequests = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onPress={() => console.log("request", item)}
        keyExtractor={(request) => request.id.toString()}
        renderItem={({ item }) => (
          <SentRequestItem
            provider_name={item.name}
            provider_rate={item.hourly_rate}
            date_time={item.time}
            status={item.status}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
export default ClientRequests;
