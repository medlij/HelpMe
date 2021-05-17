import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";
import Svg from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import svg from "../../config/svg";

const ClientProfile = ({ navigation }, props) => {
  return (
    // <View style={styles.container}>
    //   <Image style={styles.image} source={info.image} />
    //   <Text style={styles.name}> {info.name} </Text>
    //   <Text style={styles.location}>{info.location}</Text>
    // </View>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/default.jpg")}
      />
      <Text style={styles.name}>Fatima Medlij </Text>
      <Text style={styles.location}>Beirut, Cornich Mazraa</Text>
      <TouchableOpacity style={styles.button}>
        <Svg
          style={styles.search}
          preserveAspectRatio="none"
          fill={colors.text_holder}
          height="18"
          width="18"
        >
          <SvgPath d={svg.edit_svg} />
        </Svg>
        <Text style={styles.buttontext}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 80,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    paddingTop: 15,
  },
  buttontext: {
    marginLeft: 10,
    fontSize: 15,
    color: colors.text_holder,
  },
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: colors.myblue,
    padding: 10,
  },
  location: {
    fontSize: 15,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default ClientProfile;
