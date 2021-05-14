import React, { Component } from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";

var logo = require("../assets/logo.png");
var gif = require("../assets/rainbow4.gif");

import { StatusBar, ActivityIndicator } from "react-native";
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <ImageBackground
          resizeMode="contain"
          style={styles.background}
          source={gif}
        >
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  logo: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
