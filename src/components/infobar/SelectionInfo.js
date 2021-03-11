import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native-web";
import NumberInput from "../common/NumberInput";

export default function SelectionInfo() {
    const onChange = () => {}
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>Selection:</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.bold}>X</Text>
          <NumberInput value style={styles.input} onChangeNumber={onChange} />
        </View>
        <View style={styles.columnSpace} />
        <View style={styles.column}>
          <Text style={styles.bold}>Y</Text>
          <NumberInput value style={styles.input} onChangeNumber={onChange} />
        </View>
      </View>
      <View style={styles.labelRow}>
          <Text style={styles.bold}>Label:</Text>
          <TextInput value style={styles.input} onChangeText={onChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  row: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  labelRow: {},
  column: {
    flex: 1,
  },
  columnSpace: {
    width: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 4,
    border: "1px solid #d6d8d9",
    marginTop: 8,
  },
});
