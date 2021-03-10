import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorPicker from "./ColorPicker";
import SelectionInfo from "./SelectionInfo";

export default function InformationBar() {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>Document</Text>
      </View>
      <View style={[styles.row, styles.colorRow]}>
        <Text style={styles.title}>InformationBar</Text>
        {/* <ColorPicker /> */}
      </View>
      <SelectionInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 240,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d8d9",
    borderLeftType: "solid",
    padding: 16,
  },
  row: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  colorRow: {
    zIndex: 1,
  },
  title: {
    fontWeight: "bold",
  },
});
