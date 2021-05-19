import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
let auth = true;
const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      if (auth === false) {
        navigation.replace("AuthStack");
      } else {
        navigation.replace("UserTypeNav");
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splashimage.jpg")}
        style={{
          width: "90%",
          height: "90%",
          resizeMode: "contain",
          marginTop: "30%",
          flex: 1.5,
        }}
      />
      <ActivityIndicator
        animating={animating}
        color={colors.white}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
