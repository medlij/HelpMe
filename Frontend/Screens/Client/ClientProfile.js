import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import ImageInput from "../../components/ImageInput";
import useLocation from "../../hooks/useLocation";

const ClientProfile = ({ navigation }, { props }) => {
  const [imageUri, setImageUri] = useState();
  const location = useLocation();

  return (
    // <View style={styles.container}>
    //   <ImageInput/>
    //   <Text style={styles.name}> {name} </Text>
    //   <Text style={styles.location}>{location}</Text>
    // </View>
    <View style={styles.container}>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <Text style={styles.name}>Fatima Medlij </Text>
      <Text style={styles.location}>{location}</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AuthStack")}
        >
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  location: {
    fontSize: 15,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default ClientProfile;
