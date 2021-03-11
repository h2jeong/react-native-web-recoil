import React from "react";
import { SketchPicker } from "react-color";
import { StyleSheet, View } from "react-native-web";

export default function ColorPicker() {
  const handleClick = () => {};
  // const handleChangeComplete = () => {};

  return (
    <View style={styles.root} onClick={handleClick}>
      <View style={styles.inner}>
        <View style={styles.popup}>
          <SketchPicker />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: "50%",
    backgroundColor: "white",
    border: "1px solid #d6d8d9",
    width: 24,
    height: 24,
    marginLeft: 16,
    padding: 2,
  },
  inner: {
    borderRadius: "50%",
    width: 18,
    height: 18,
  },
  popup: {
    position: "absolute",
    right: 32,
  },
});
