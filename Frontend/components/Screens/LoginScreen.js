import React, { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";

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
    if (!email) {
      alert("Enter a valid email");
      return;
    }
    if (!password) {
      alert("Fill password");
      return;
    }

    let data = {
      email: email,
      password: password,
      remember_token: remember,
    };
    axios
      .post("http://127.0.0.1:8000/api/login", data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          navigation.replace("TabNavigator");
          console.log("working bestie");
          // CookieService.set(
          //     "access_token",
          //     response.data.access,
          //     // options
          // );
          console.log("Bestie the token is:\n", response.data.access);
        } else {
          alert("invalid username and password");
        }
      })
      .catch((error) => {
        let errortext = error;
        console.log(error);
      });

    handleRemember;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(email) => setEmail(email)}
        placeholder="Enter Email"
        placeholderTextColor="grey"
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
        color="black"
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(password) => setPassword(password)}
        placeholder="Enter Password"
        placeholderTextColor="grey"
        keyboardType="default"
        ref={passwordInputRef}
        secureTextEntry={true}
        underlineColorAndroid="#f000"
        returnKeyType="next"
        color="black"
      />
      {errortext != "" ? <Text style={styles.error}>{errortext}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, color: "black", marginBottom: 20 }}>
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
    fontSize: 50,
    color: colors.myblue,
    marginBottom: 40,
  },
  link: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    color: colors.myblue,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputBox: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
    height: 50,
    marginBottom: 20,
    color: "black",
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
    justifyContent: "center",
    //padding: 20
  },
  image: {
    height: 100,
    width: 100,
    opacity: 100,
  },
});
