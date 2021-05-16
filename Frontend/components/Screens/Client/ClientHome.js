import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Image as ReactImage } from "react-native";
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";
import colors from "../../config/colors";
import svg from "../../config/svg";
let other_svg = require("../../../assets/other.svg");
export default function ClientHome({ navigation }) {
  const handleFixingPress = () => {
    console.log("Take to browsing with fixing filter");
  };
  const handleCleaningPress = () => {
    console.log("Take to browsing with cleaning filter");
  };
  const handleMovingPress = () => {
    console.log("Take to browsing with movingfilter");
  };
  const handleOtherPress = () => {
    console.log("Take to browsing with other filter");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>What do you need help with?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleFixingPress}>
          <View style={styles.rectangle}>
            <View style={styles.box}>
              <Svg
                fill={colors.white}
                preserveAspectRatio="none"
                viewBox="18.4 20 64 56"
              >
                <SvgPath d={svg.tools_svg} />
              </Svg>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCleaningPress}>
          <View style={styles.rectangle}>
            <View style={styles.box}>
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
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleMovingPress}>
          <View style={styles.rectangle}>
            <View style={styles.box}>
              <Svg
                fill={colors.white}
                preserveAspectRatio="none"
                viewBox="0 16 72 63"
              >
                <SvgPath d={svg.moving_svg} />
              </Svg>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOtherPress}>
          <View style={styles.rectangle}>
            <View style={styles.box}>
              <Svg
                fill={colors.white}
                preserveAspectRatio="none"
                viewBox="0 0 30 30"
              >
                <SvgPath d={svg.other_svg} />
              </Svg>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    flex: 0.5,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: colors.black,
  },
  rectangle: {
    opacity: 1,
    backgroundColor: colors.lightblue,
    borderRadius: 19,
    width: 120,
    height: 120,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  box: {
    opacity: 1,
    width: "80%",
    height: "80%",
  },
  svg: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
  },
});
