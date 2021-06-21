import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
// import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import RadioButton from "expo-radio-button";
import colors from "../config/colors";
import axios from "axios";
import { useState, createRef } from "react";
import ErrorMessage from "../components/ErrorMessage";

const SignupScreen = ({ navigation }, props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [c_password, setUserCPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [usertype, setUserType] = useState(null);
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [category, setCategory] = useState();

  //Drop Down for ios
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Fixing", value: "fixing" },
    { label: "Cleaning ", value: "cleaning" },
    { label: "Moving", value: "moving" },
    { label: "Other ", value: "other" },
  ]);
  const handleSelected = (value) => {
    if (value == 0) {
      setCategory(null);
    }
    setUserType(value);
  };
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    if (!name) {
      setErrortext("Please enter Name");
      return;
    }
    if (!email) {
      return setErrortext("Please enter Email");
    }

    if (!password) {
      return setErrortext("Please enter Password");
    }
    if (!c_password) {
      return setErrortext("Please Re-enter Password");
    }
    if (c_password != password) {
      return setErrortext("Passwords dont match");
    }

    if (!usertype) {
      return setErrortext("Please choose Client or Provider");
    }

    if (usertype == 1 && category == "null") {
      return setErrortext("Please choose a category");
    }

    let pdata = {
      name: name,
      email: email,
      password: password,
      is_provider: usertype,
      category: category,
    };

    let cdata = {
      name: name,
      email: email,
      password: password,
      is_provider: usertype,
    };

    if (usertype == 1) {
      axios
        .post("http://dc46ebab6a65.ngrok.io/api/register", pdata)
        .then((response) => {
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
    } else {
      axios
        .post("http://e5dd6bacd317.ngrok.io/api/register", cdata)
        .then((response) => {
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
    }
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
        onChangeText={(name) => (setName(name), setErrortext(""))}
        returnKeyType="next"
        onSubmitEditing={() =>
          emailInputRef.current && emailInputRef.current.focus()
        }
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Enter Email"
        onChangeText={(email) => (setEmail(email), setErrortext(""))}
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
        onChangeText={(password) => (
          setUserPassword(password), setErrortext("")
        )}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry
        blurOnSubmit={false}
        secureTextEntry={true}
        placeholderTextColor={colors.text_holder}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        onChangeText={(c_password) => (
          setUserCPassword(c_password), setErrortext("")
        )}
        ref={passwordInputRef}
        returnKeyType="next"
        secureTextEntry
        blurOnSubmit
        secureTextEntry={true}
        placeholderTextColor={colors.text_holder}
      />

      <ErrorMessage error={errortext} />
      <View style={styles.radiobuttoncontainer}>
        <RadioButton
          value="0"
          selected={usertype}
          size={18}
          containerStyle={{ marginHorizontal: 30 }}
          onSelected={handleSelected}
          radioBackground={colors.myblue}
        >
          <Text style={styles.options}>Client </Text>
        </RadioButton>
        <RadioButton
          value="1"
          selected={usertype}
          size={18}
          containerStyle={{ marginHorizontal: 30 }}
          onSelected={handleSelected}
          radioBackground={colors.myblue}
        >
          <Text style={styles.options}>Provider</Text>
        </RadioButton>
      </View>
      {usertype == "1" ? (
        <View style={styles.categoryContainer}>
          <DropDownPicker
            placeholder="Category"
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            style={styles.picker}
            onPress={(category) => setCategory(category)}
            listMode="SCROLLVIEW"
          />
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
    backgroundColor: colors.white,
    height: 40,
    width: 110,
    alignSelf: "center",
    borderColor: colors.white,
  },
  picker_text: {
    color: colors.myblue,
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
