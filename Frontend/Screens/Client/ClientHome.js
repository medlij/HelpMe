import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Svg from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";

import svg from "../../config/svg";
import colors from "../../config/colors";

const image = require("../../assets/icon.jpg");

export default function ClientHome({ navigation }) {
  const handleFixingPress = () => {
    navigation.navigate("Browse", { category: "fixing" });
  };

  const handleCleaningPress = () => {
    navigation.navigate("Browse", { category: "cleaning" });
  };

  const handleMovingPress = () => {
    navigation.navigate("Browse", { category: "moving" });
  };

  const handleOtherPress = () => {
    navigation.navigate("Browse", { category: "other" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.text}>What do you need Help with?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleFixingPress}>
          <View style={styles.rectangle}>
            <Svg
              fill={colors.white}
              preserveAspectRatio="none"
              viewBox="18.4 20 64 56"
            >
              <SvgPath d={svg.tools_svg} />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCleaningPress}>
          <View style={styles.rectangle}>
            <Svg
              fill={colors.white}
              preserveAspectRatio="none"
              //stroke width to make it bolder//
              strokeWidth="2"
              stroke="white"
              viewBox="3.3 1.7 76 67.5"
            >
              <SvgPath d={svg.cleaning_svg} />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleMovingPress}>
          <View style={styles.rectangle}>
            <Svg
              fill={colors.white}
              preserveAspectRatio="none"
              viewBox="0 16 72 63"
            >
              <SvgPath d={svg.moving_svg} />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOtherPress}>
          <View style={styles.rectangle}>
            <Svg
              fill={colors.white}
              preserveAspectRatio="none"
              viewBox="0 0 512 512"
            >
              <SvgPath d={svg.other_svg} />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  icon: {
    width: 100,
    height: 100,
  },
  rectangle: {
    opacity: 1,
    backgroundColor: colors.lightblue,
    borderRadius: 19,
    width: 120,
    height: 120,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  svg: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.black,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text_container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
