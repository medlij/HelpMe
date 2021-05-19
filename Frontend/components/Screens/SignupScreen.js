import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Picker } from "@react-native-picker/picker";
import RadioButton from "expo-radio-button";
import colors from "../config/colors";
//import axios from 'axios';
import { useState, createRef } from "react";
import ErrorMessage from "../ErrorMessage";

const SignupScreen = ({ navigation }, props) => {
  const [current, setCurrent] = useState("client");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [c_password, setUserCPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [usertype, setUserType] = useState("Client");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [category, setCategory] = useState("Fixing");

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    if (!name) {
      setErrortext("Please fill Name");
    }
    if (!email) {
      setErrortext("Please fill Email");
    }

    if (!password) {
      setErrortext("Please fill Password");
    }
    if (!c_password) {
      setErrortext("Please Re-enter Password");
    }
    // let data = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   c_password: c_password,
    // };
    // axios
    //   .post("http://127.0.0.1:8000/api/register", data)
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       setIsRegistraionSuccess(true);
    //       navigation.replace("LoginScreen");
    //       console.log("Registration Successful. Please Login to proceed");
    //     } else {
    //       console.log("registration failed");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.myblue,
          justifyContent: "center",
        }}
      >
        <Text style={styles.header}>Registration Successful!</Text>
        <TouchableOpacity
          style={styles.link}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Full Name"
        placeholderTextColor={colors.text_holder}
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
        onSubmitEditing={() =>
          emailInputRef.current && emailInputRef.current.focus()
        }
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Enter Email"
        onChangeText={(email) => setEmail(email)}
        ref={emailInputRef}
        returnKeyType="next"
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
        blurOnSubmit={false}
        placeholderTextColor={colors.text_holder}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Enter Password"
        onChangeText={(password) => setUserPassword(password)}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry
        onSubmitEditing={() =>
          ageInputRef.current && ageInputRef.current.focus()
        }
        blurOnSubmit={false}
        secureTextEntry={true}
        placeholderTextColor={colors.text_holder}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        onChangeText={(c_password) => setUserCPassword(c_password)}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry
        onSubmitEditing={() =>
          ageInputRef.current && ageInputRef.current.focus()
        }
        blurOnSubmit={false}
        secureTextEntry={true}
        placeholderTextColor={colors.text_holder}
      />

      <ErrorMessage error={errortext} />
      <View style={styles.radiobuttoncontainer}>
        <RadioButton
          value="Client"
          selected={usertype}
          size={18}
          containerStyle={{ marginHorizontal: 30 }}
          onSelected={(value) => setUserType(value)}
          radioBackground={colors.myblue}
        >
          <Text style={styles.options}>Client </Text>
        </RadioButton>
        <RadioButton
          value="Provider"
          selected={usertype}
          size={18}
          containerStyle={{ marginHorizontal: 30 }}
          onSelected={(value) => setUserType(value)}
          radioBackground={colors.myblue}
        >
          <Text style={styles.options}>Provider</Text>
        </RadioButton>
      </View>
      {usertype == "Provider" ? (
        <View style={styles.categoryContainer}>
          <Picker
            selectedValue={category}
            style={styles.picker}
            mode="dropdown"
            onValueChange={(category) => setCategory(category)}
          >
            <Picker.Item label="Fixing" value="Fixing" />
            <Picker.Item label="Cleaning" value="Cleaning" />
            <Picker.Item label="Moving" value="Moving" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16, color: colors.black, marginBottom: 10 }}>
        Already a member?
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.myblue,
    width: 100,
    marginVertical: 20,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
  categoryContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
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
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputBox: {
    width: "80%",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.black,
    marginVertical: 10,
    height: 50,
    marginBottom: 15,
  },
  link: {
    backgroundColor: colors.white,
    textAlign: "center",
    color: colors.myblue,
    fontWeight: "bold",
    fontSize: 18,
  },
  options: {
    fontSize: 15,
    color: colors.dark_grey,
  },
  picker: {
    height: 40,
    width: 130,
    color: colors.dark_grey,
  },
  radiobutton: {
    marginHorizontal: 10,
    flexDirection: "row",
    color: colors.myblue,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  radiobuttoncontainer: {
    marginVertical: 15,
    alignContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
});
