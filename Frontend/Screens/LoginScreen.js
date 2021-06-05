import React, { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const passwordInputRef = createRef();

  const handleSubmitPress = async () => {
    if (!email) {
      setErrortext("Email field cannot be empty");
      return;
    }
    if (!password) {
      setErrortext("Password field cannot be empty");
      return;
    }

    let data = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/login", data)
      .then((response) => {
        if (response.status === 200) {
          navigation.replace("UserTypeNav", {
            usertype: response.data.is_provider,
          });
        }
      })
      .catch((error) => {
        console.log("the error is", error);
        setErrortext("Invalid Email and Password");
      });
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
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(password) => setPassword(password)}
        placeholder="Enter Password"
        placeholderTextColor={colors.text_holder}
        keyboardType="default"
        ref={passwordInputRef}
        secureTextEntry
        returnKeyType="next"
      />
      <ErrorMessage error={errortext} />
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
