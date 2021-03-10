import React from "react";
import { StyleSheet, View } from "react-native-web";
import Canvas from "./canvas/Canvas";
import InformationBar from "./infobar/InformationBar";
import SideBar from "./sidebar/SideBar";

const Main = () => {
  return (
    <View style={styles.root}>
      <SideBar />
      <Canvas />
      <InformationBar />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    height: "100vh",
    flexDirection: "row",
    backgroundColor: "#eef0f4",
  },
});
export default Main;
