import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Svg from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import colors from "../../config/colors";
import svg from "../../config/svg";

export default function ClientHome({ navigation }) {
  const handleFixingPress = () => {
    navigation.navigate("Browse", { category: "Fixing" });
  };

  const handleCleaningPress = () => {
    navigation.navigate("Browse", { category: "Cleaning" });
  };

  const handleMovingPress = () => {
    navigation.navigate("Browse", { category: "Moving" });
  };

  const handleOtherPress = () => {
    navigation.navigate("Browse", { category: "Other" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>What do you need help </Text>
        <Text style={styles.text}>with?</Text>
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
                viewBox="0 0 512 512"
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
  box: {
    opacity: 1,
    width: "80%",
    height: "80%",
  },
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  rectangle: {
    opacity: 1,
    backgroundColor: colors.lightblue,
    borderRadius: 19,
    width: 110,
    height: 110,
    padding: 15,
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
  svg: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text_container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 80,
  },
});