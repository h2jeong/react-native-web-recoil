import React from "react";
import { StyleSheet, View } from "react-native-web";
import AddRectsButton from "./AddRectsButton";
import ItemInfoList from "./ItemInfoList";
import ToolBar from "../toolbar/ToolBar";

export default function SideBar() {
  return (
    <View style={styles.root}>
      <ToolBar />
      <ItemInfoList />
      <View>
        <AddRectsButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: "100vh",
    borderRightWidth: 1,
    borderRightColor: "#d6d8d9",
    borderRightType: "solid",
    padding: 16,
  },
});
