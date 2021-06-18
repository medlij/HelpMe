import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import colors from "../config/colors";

const SplashScreen = ({ navigation }) => {
  // const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(true);
  const { token, setUser } = useContext(AuthContext);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) {
      setTimeout(() => {
        setAnimating(false);
        navigation.replace("AuthStack");
      }, 8000);
      return console.log("no auth token");
    }
    setUser(jwtDecode(token));
    navigation.replace("UserTypeNav");
  };
  
  useEffect(() => {
    restoreToken();
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
