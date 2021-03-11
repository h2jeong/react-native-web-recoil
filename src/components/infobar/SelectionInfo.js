import React, { useCallback } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native-web";
import { useRecoilState } from "recoil";
import { selectedItemsSelector } from "../../recoil/selectors";
import NumberInput from "../common/NumberInput";

export default function SelectionInfo() {
  const [selectedItems, setSelectedItems] = useRecoilState(
    selectedItemsSelector
  );
  const updateSelectedItem = useCallback(
    (name, value) => {
      setSelectedItems([{ ...setSelectedItems[0], [name]: value }]);
    },
    [selectedItems, setSelectedItems]
  );

  if (selectedItems.length !== 1) return null;

  const selectedItem = selectedItems[0];

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>Selection:</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.bold}>X</Text>
          <NumberInput
            value={selectedItem.x}
            style={styles.input}
            onChangeNumber={(number) => updateSelectedItem("x", number)}
          />
        </View>
        <View style={styles.columnSpace} />
        <View style={styles.column}>
          <Text style={styles.bold}>Y</Text>
          <NumberInput
            value={selectedItem.y}
            style={styles.input}
            onChangeNumber={(number) => updateSelectedItem("y", number)}
          />
        </View>
      </View>
      {["image"].indexOf(selectedItem.type) === -1 && (
        <View style={styles.labelRow}>
          <Text style={styles.bold}>Label:</Text>
          <TextInput
            value={selectedItem.label}
            style={styles.input}
            onChangeText={(text) => updateSelectedItem("label", text)}
          />
        </View>
      )}
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
