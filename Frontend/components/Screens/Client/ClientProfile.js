import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const ClientProfile = ({ navigation }, { image, name, location }) => {
  return (
    // <View style={styles.container}>
    //   <Image style={styles.image} source={image} />
    //   <Text style={styles.name}> {name} </Text>
    //   <Text style={styles.location}>{location}</Text>
    // </View>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/default.jpg")}
      />
      <Text style={styles.name}>Fatima Medlij </Text>
      <Text style={styles.location}>Beirut, Cornich Mazraa</Text>
      {/* Dummy Data Above */}
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="account-edit"
            size={24}
            color={colors.text_holder}
          />
          <Text style={styles.buttontext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="logout" size={24} color={colors.text_holder} />
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  buttoncontainer: {
    marginTop: 30,
    alignContent: "center",
    justifyContent: "center",
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
