import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import ImageInput from "../../components/ImageInput";
import useLocation from "../../hooks/useLocation";
import Constants from "expo-constants";
import { Fontisto } from "@expo/vector-icons";
import detailsApi from "../../api/users";
import UserContext from "../../id/context";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";
import typeStorage from "../../usertype/storage";
import idStorage from "../../id/storage";

const ProviderProfile = ({ navigation }) => {
  const { id, setId } = useContext(UserContext);
  const { user, setUser } = useContext(AuthContext);

  const [imageUri, setImageUri] = useState();
  const location = useLocation();
  const [data, setData] = useState([]);

  const handleLogOut = () => {
    navigation.navigate("AuthStack"), setUser(null);
    authStorage.removeToken();
    typeStorage.removeUserType();
    idStorage.removeId();
  };

  useEffect(() => {
    taskerDetails();
  }, []);

  const taskerDetails = async () => {
    const id = await idStorage.getId();
    setId(id);
    const response = await detailsApi.taskerDetails(id);
    console.log(response.data);
    setData(response.data);
    setImageUri(response.data.avatar);
  };

  const handleEdit = async () => {
    const response = await detailsApi.update();
    setData(response.data);
    setImageUri(response.data.avatar);
    console.log("Edit");
  };
  var stars = [];
  for (let i = data.rating; i >= 1; i--) {
    stars.push(
      <View key={i}>
        <Fontisto name="star" size={22} color={colors.myyellow} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <Text style={styles.name}>{data.name} </Text>
      <Text style={styles.ratingcontainer}>{stars}</Text>
      <Text style={styles.bio}>{data.bio}</Text>
      <Text style={styles.location}>{data.location}</Text>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <MaterialCommunityIcons
            name="account-edit"
            size={24}
            color={colors.text_holder}
          />
          <Text style={styles.buttontext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogOut}>
          <MaterialIcons name="logout" size={24} color={colors.text_holder} />
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bio: {
    fontSize: 15,
    marginBottom: 3,
    textShadowColor: colors.dark_grey,
    textShadowRadius: 2,
  },
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
  // layout: {
  //   flex: 0.1,
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: colors.myblue,
  // },
  location: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 5,
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
