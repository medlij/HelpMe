import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import ImageInput from "../../components/ImageInput";
import useLocation from "../../hooks/useLocation";
import { Fontisto } from "@expo/vector-icons";

const ProviderProfile = ({ navigation }, { props }) => {
  const [imageUri, setImageUri] = useState();
  const location = useLocation();
  let rating = 4.6;
  var stars = [];
  for (let i = rating; i >= 1; i--) {
    stars.push(
      <View key={i}>
        <Fontisto name="star" size={18} color={colors.myyellow} />
      </View>
    );
  }
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
      <View style={styles.ratingcontainer}>{stars}</View>
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
  ratingcontainer: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
export default ProviderProfile;
