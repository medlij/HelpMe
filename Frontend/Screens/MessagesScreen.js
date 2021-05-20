import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight, ScrollView } from "react-native";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
const initialMessages = [
  {
    id: 1,
    title: "Elie Kozah",
    description: "Text message tex text tex",
    image: require("../assets/default.jpg"),
  },
  {
    id: 2,
    title: "Fatima Medlij",
    description: "Hello Bestie",
    image: require("../assets/default.jpg"),
  },
  {
    id: 3,
    title: "Mohammad",
    description: "salam aleikom",
    image: require("../assets/default.jpg"),
  },
  {
    id: 4,
    title: "Wissam",
    description: "Stan G idle!!",
    image: require("../assets/default.jpg"),
  },
  {
    id: 5,
    title: "Zaynab",
    description: "Maraheb ",
    image: require("../assets/default.jpg"),
  },
  {
    id: 6,
    title: "Elie Kozah",
    description: "Text message tex text tex",
    image: require("../assets/default.jpg"),
  },
  {
    id: 7,
    title: "Fatima Medlij",
    description: "Hello Bestie",
    image: require("../assets/default.jpg"),
  },
  {
    id: 8,
    title: "Mohammad",
    description: "salam aleikom",
    image: require("../assets/default.jpg"),
  },
  {
    id: 9,
    title: "Wissam",
    description: "Stan G idle!!",
    image: require("../assets/default.jpg"),
  },
  {
    id: 10,
    title: "Zaynab",
    description: "Maraheb ",
    image: require("../assets/default.jpg"),
  },
];
function MessagesScreen() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View style={styles.layout}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() =>
              navigation.navigate("ChatScreen", {
                id: item.id,
                person: item.title,
                image: item.image
              })
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Fatima Medlij",
              description: "Hello Bestie",
              image: require("../assets/default.jpg"),
            },
            {
              id: 3,
              title: "Mohammad ",
              description: "salam aleikom",
              image: require("../assets/default.jpg"),
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default MessagesScreen;
