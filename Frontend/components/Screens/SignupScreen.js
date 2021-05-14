import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import RadioButton from "expo-radio-button";
import colors from "../config/colors";
//import axios from 'axios';
import { useState, createRef } from "react";
import LoginScreen from "./LoginScreen";

const SignupScreen = ({ navigation }, props) => {
  const [current, setCurrent] = useState("option 1");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [c_password, setUserCPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!name) {
      alert("Please fill Name");
      return;
    }
    if (!email) {
      alert("Please fill Email");
      return;
    }

    if (!password) {
      alert("Please fill Password");
      return;
    }
    if (!c_password) {
      alert("Please fill Password");
      return;
    }
    let data = {
      name: name,
      email: email,
      password: password,
      c_password: c_password,
    };
    axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setIsRegistraionSuccess(true);
          navigation.replace("LoginScreen");
          console.log("Registration Successful. Please Login to proceed");
        } else {
          console.log("registration failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isRegistraionSuccess) {
    return <LoginScreen />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Name"
        placeholderTextColor="grey"
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
        onSubmitEditing={() =>
          emailInputRef.current && emailInputRef.current.focus()
        }
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        ref={emailInputRef}
        returnKeyType="next"
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
        blurOnSubmit={false}
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        onChangeText={(password) => setUserPassword(password)}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry={true}
        onSubmitEditing={() =>
          ageInputRef.current && ageInputRef.current.focus()
        }
        blurOnSubmit={false}
        secureTextEntry={true}
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        onChangeText={(c_password) => setUserCPassword(c_password)}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry={true}
        onSubmitEditing={() =>
          ageInputRef.current && ageInputRef.current.focus()
        }
        blurOnSubmit={false}
        secureTextEntry={true}
        placeholderTextColor="grey"
      />

      {errortext != "" ? <Text style={styles.error}>{errortext}</Text> : null}
      <View style={styles.radiobuttoncontainer}>
        <RadioButton
          value="client"
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#1498D5"
        >
          <Text>Client </Text>
        </RadioButton>
        <RadioButton
          value="provider"
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#1498D5"
        >
          <Text>Provider</Text>
        </RadioButton>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmitButton}>
        <Text style={styles.buttonText}>Submit</Text>
        {/* <Text>Signup using xyz</Text> */}
      </TouchableOpacity>
      <Text style={{ fontSize: 12, color: "black", marginBottom: 20 }}>
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
  container: {
    backgroundColor: "#ffffff",
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
  text: {
    fontSize: 40,
    color: colors.myblue,
    marginBottom: 30,
  },
  link: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    color: colors.myblue,
    fontWeight: "bold",
    fontSize: 12,
  },
  inputBox: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "black",
    marginVertical: 10,
    height: 50,
    marginBottom: 15,
    //justifyContent: "center",
    //alignItems: "center"
    //padding: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.myblue,
    width: 100,
    //borderRadius: 50,
    marginVertical: 10,
    //borderRadius: 25,
    height: 50,
    marginBottom: 30,
    marginTop: 30,
    justifyContent: "center",
    //padding: 20
  },
  image: {
    height: 100,
    width: 100,
    opacity: 100,
  },
  radiobutton: {
    marginHorizontal: 10,
    flexDirection: "row",
    color: colors.myblue,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  radiobuttoncontainer: {
    marginTop: 20,
    alignContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
});
