import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function ErrorMessage({ error }) {
  if (!error) return null;

  return <Text style={styles.style}>{error}</Text>;
}

const styles = StyleSheet.create({
  style: {
    color: colors.error,
  },
});
export default ErrorMessage;
