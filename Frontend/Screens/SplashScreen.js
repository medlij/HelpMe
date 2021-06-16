import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import AuthContext from "../auth/context";
import colors from "../config/colors";


const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  const auth = useContext(AuthContext)

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      if (auth) {
        navigation.replace("AuthStack");
      } else {
        navigation.replace("UserTypeNav");
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/helpme.png")}
        // source={require('../assets/splashimage.jpg')}
        style={{
          width: "90%",
          height: "90%",
          resizeMode: "contain",
          marginTop: "30%",
          flex: 0.5,
        }}
      />
      <Image
        source={require("../assets/splash.gif")}
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
