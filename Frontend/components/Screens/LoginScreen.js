import React, { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
//import AsyncStorage from "@react-native-community/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const passwordInputRef = createRef();
  const [remember, setRemember] = useState(0);

  const handleRemember = (event) => {
    if (event.target.checked) {
      setRemember(1);
    } else {
      setRemember(0);
    }
  };
  const handleSubmitPress = () => {
    setErrortext("");
    if (email === "f@gmail.com" && password === "123") {
      navigation.replace("UserTypeNav");
    }
    if (!email) {
      alert("Enter a valid email");
      return;
    }
    if (!password) {
      alert("Fill password");
      return;
    }

    // let data = {
    //   email: email,
    //   password: password,
    //   remember_token: remember,
    // };
    // axios
    //   .post("http://127.0.0.1:8000/api/login", data)
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       AsyncStorage.setItem("user_id", responseJson.data.email);
    //       navigation.replace("DrawerNavigationRoutes");
    // CookieService.set(
    //     "access_token",
    //     response.data.access,
    //     // options
    // );
    //   } else {
    //     alert("invalid username and password");
    //   }
    // })
    // .catch((error) => {
    //   let errortext = error;
    //   console.log(error);
    // });

    handleRemember;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(email) => setEmail(email)}
        placeholder="Enter Email"
        placeholderTextColor={colors.text_holder}
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
        color={colors.black}
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(password) => setPassword(password)}
        placeholder="Enter Password"
        placeholderTextColor={colors.text_holder}
        keyboardType="default"
        ref={passwordInputRef}
        secureTextEntry={true}
        returnKeyType="next"
        color={colors.black}
      />
      {errortext != "" ? <Text style={styles.error}>{errortext}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, color: colors.black, marginBottom: 10 }}>
        Don't have an account?
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={styles.link}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.myblue,
    width: 100,
    marginVertical: 10,
    height: 50,
    marginBottom: 30,
    marginTop: 30,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
  container: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  header: {
    fontSize: 40,
    color: colors.myblue,
    marginBottom: 30,
    fontWeight: "bold",
  },
  inputBox: {
    width: "80%",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.white,
    marginVertical: 10,
    height: 50,
    marginBottom: 20,
    color: colors.black,
  },
  link: {
    backgroundColor: colors.white,
    textAlign: "center",
    color: colors.myblue,
    fontWeight: "bold",
    fontSize: 18,
  },
});
