import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  date,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.babygrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <View style={styles.line}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.datecontainer}>
                <Text style={styles.date}>{date}</Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    maxHeight: 100,
    borderBottomColor: colors.babygrey,
  },
  date: {
    fontSize: 12,
    color: colors.text_holder,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },

  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 10,
  },
  line: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    color: colors.text_holder,
    marginTop: 10,
    maxWidth: 300,
    flexDirection: "row",
    flex: 1,
    width: 300,
  },
  title: {
    fontWeight: "500",
    color: colors.black,
  },
});

export default ListItem;
