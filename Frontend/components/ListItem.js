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

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.babygrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    maxHeight: 80,
    flex: 1,
    padding: 10,
    marginBottom: 5,
    borderColor: colors.babyblue,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 10,
  },
  subTitle: {
    color: colors.dark_grey,
    marginTop: 6,
  },
  title: {
    marginTop: 10,
    fontWeight: "500",
    color: colors.black,
  },
});

export default ListItem;
