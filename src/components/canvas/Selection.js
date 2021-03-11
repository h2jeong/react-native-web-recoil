import React from "react";
import { StyleSheet, View } from "react-native-web";
import ResizeHandler from "./ResizeHandler";

export default function Selection() {
  const selection = {};
  const { onMouseDown } = () => {};
  const { x, y, width, height } = selection;

  return (
    <>
      <View
        style={[
          styles.selection,
          {
            left: x,
            top: y,
            width,
            height,
          },
        ]}
        onMouseDown={onMouseDown}
      />
      <ResizeHandler />
    </>
  );
}

const styles = StyleSheet.create({
  selection: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "blue",
    position: "absolute",
    cursor: "move",
  },
});
