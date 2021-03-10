import React from "react";
import { StyleSheet, Text } from "react-native";
import Button from "../common/Button";

export default function AddRectsButton() {
  const handleClick = () => {};

  return (
    <Button style={styles.root} onClick={handleClick}>
      <Text style={styles.text}>Add 100 Rects</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#12850b",
  },
  text: {
    color: "white",
  },
});
