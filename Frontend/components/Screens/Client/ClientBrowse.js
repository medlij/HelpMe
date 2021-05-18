import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import colors from "../../config/colors";
import ProviderCard from "../../ProviderCard";
import { Path as SvgPath } from "react-native-svg";
import Svg from "react-native-svg";
import svg from "../../config/svg";

const ClientBrowse = ({ navigation }, { props }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search Providers"
          placeholderTextColor={colors.text_holder}
          color={colors.black}
        />
        <TouchableOpacity style={styles.button}>
          <Svg
            style={styles.search}
            preserveAspectRatio="none"
            fill={colors.white}
            height="18"
            width="18"
          >
            <SvgPath d={svg.search_svg} />
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Elie Kozah"}
          location={"Beirut"}
          category={"Electric"}
          rating={2.8}
        />
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Nour Klait"}
          location={"Beirut"}
          category={"Electric"}
          rating={4.1}
        />
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Rahaf Zaiter"}
          location={"Beirut"}
          category={"Electric"}
          rating={3}
        />
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Fatima Medlij"}
          location={"Beirut"}
          category={"Electric"}
          rating={4}
        />
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Mazen Pharmacy"}
          location={"Beirut"}
          category={"Electric"}
          rating={4.2}
        />
        <ProviderCard
          image={require("../../../assets/default.jpg")}
          name={"Malik Books"}
          location={"Beirut"}
          category={"Electric"}
          rating={1.2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark_grey,
    width: 70,
    marginVertical: 10,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    paddingTop: 15,
  },
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: colors.dark_grey,
  },
  category: {
    fontSize: 13,
    marginBottom: 8,
  },
  container: {
    backgroundColor: colors.babyblue,
    flexDirection: "row",
    width: "100%",
    maxHeight: 100,
    flex: 1,
    padding: 10,
    marginBottom: 5,
    paddingTop: 10,
  },
  inputBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.dark_grey,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.white,
    marginVertical: 10,
    height: 50,
    marginBottom: 20,
    color: colors.black,
    flex: 1,
  },
  layout: {
    alignContent: "center",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  location: {
    fontSize: 13,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  textcontainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-start",
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
  ratingcontainer: {
    alignContent: "flex-end",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  search: {
    paddingTop: 10,
    padding: 10,
  },
  searchbar: {
    flexDirection: "row",
    width: "100%",
    paddingTop: Constants.statusBarHeight,
  },
  star: {
    marginLeft: 5,
    width: 22,
    height: 27,
  },
});
export default ClientBrowse;
