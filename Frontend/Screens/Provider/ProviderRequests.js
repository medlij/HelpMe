import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import RequestItem from "../../components/RequestItem";
import Constants from "expo-constants";

const data = [
  {
    id: 1,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 2,
    name: "Fatima Medlij",
    location: "City, Street",
    time: "14/12/2021 5:00pm",
  },
  {
    id: 3,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 4,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 5,
    name: "Fatima Medlij",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 6,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 7,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 8,
    name: "Fatima Medlij",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
  {
    id: 9,
    name: "Elie Kozah",
    location: "Beirut, Street Name",
    time: "14/12/2021 5:00pm ",
  },
];
const ProviderRequests = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onPress={() => console.log("request", item)}
        keyExtractor={(request) => request.id.toString()}
        renderItem={({ item }) => (
          <RequestItem
            name={item.name}
            location={item.location}
            date_time={item.time}
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
export default ProviderRequests;
