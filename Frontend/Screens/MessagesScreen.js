import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";
import MessageItem from "../components/MessageItem";
import MessageDelete from "../components/MessageDelete";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Jenny Doe",
    image: require("../assets/default3.jpeg"),
    time: "4 mins ago",
    subTitle: "hello i am jenny doeee ",
  },
  {
    id: 2,
    title: "John Doe",
    image: require("../assets/default2.jpeg"),
    time: "2 hours ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 3,
    title: "Ken William",
    image: require("../assets/default1.jpeg"),
    time: "1 hours ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 4,
    title: "Selina Paul",
    image: require("../assets/default4.jpeg"),
    time: "1 day ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 5,
    title: "Christy Alex",
    image: require("../assets/default.jpeg"),
    time: "2 days ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 6,
    title: "Jenny Doe",
    image: require("../assets/default3.jpeg"),
    time: "4 mins ago",
    subTitle: "Hello",
  },
  {
    id: 7,
    title: "John Doe",
    image: require("../assets/default2.jpeg"),
    time: "2 hours ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 8,
    title: "Ken William",
    image: require("../assets/default1.jpeg"),
    time: "1 hours ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: 9,
    title: "Selina Paul",
    image: require("../assets/default4.jpeg"),
    time: "1 day ago",
    subTitle:
      "This is another text, im asing you questions hello i am Selina paul",
  },
  {
    id: 10,
    title: "Christy Alex",
    image: require("../assets/default.jpeg"),
    time: "2 days ago",
    subTitle:
      "Hey there, this is my test for a post of my social app in React Native.",
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
          <MessageItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            date={item.time}
            onPress={() =>
              navigation.navigate("ChatScreen", {
                id: item.id,
                person: item.title,
                image: item.image,
                txt: item.subTitle,
              })
            }
            renderRightActions={() => (
              <MessageDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Fatima Medlij",
              subTitle: "Hello Bestie",
              image: require("../assets/default.jpeg"),
            },
            {
              id: 3,
              title: "Mohammad ",
              subTitle: "salam aleikom",
              image: require("../assets/default1.jpeg"),
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.babygrey,
  },
});

export default MessagesScreen;
