import React, { useState, createRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import jwtDecode from "jwt-decode";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import TypeContext from "../usertype/context";
import UserContext from "../id/context";
import authStorage from "../auth/storage";
import typeStorage from "../usertype/storage";
import idStorage from "../id/storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const passwordInputRef = createRef();

  const authContext = useContext(AuthContext);
  const typeContext = useContext(TypeContext);
  const userContext = useContext(UserContext);

  // const handleLogOut = () =>{
  //   authStorage.removeToken,
  //   idStorage.removeId,
  //   typeStorage.removeUserType
  // }

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

    const result = await authApi.login(data);
    if (!result.ok) {
      console.log("the error is", result);
      setErrortext("Invalid Email and/or Password");
      authContext.setUser(null);
    }
    if (result.ok) {
      setErrortext("");
      const user = jwtDecode(result.data.token);
      authContext.setUser(user);
      authStorage.storeToken(result.data.token);

      const usertype = result.data.is_provider;
      typeContext.setUserType(usertype);
      typeStorage.storeUserType(JSON.stringify(usertype));

      const user_id = result.data.user_id;
      userContext.setId(user_id);
      idStorage.storeId(JSON.stringify(user_id));

      navigation.replace("UserTypeNav");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(email) => (setEmail(email), setErrortext(""))}
        placeholder="Enter Email"
        placeholderTextColor={colors.text_holder}
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(password) => (setPassword(password), setErrortext(""))}
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
        onPress={() => navigation.replace("SignupScreen")}
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
