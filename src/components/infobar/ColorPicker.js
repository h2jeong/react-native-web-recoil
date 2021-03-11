import React, { useCallback, useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { StyleSheet, View } from "react-native-web";
import { useRecoilState } from "recoil";
import { backgroundColorState } from "../../recoil/atoms";

export default function ColorPicker() {
  const [shown, setShown] = useState(false);
  const [backgroundColor, setBackgroundColor] = useRecoilState(
    backgroundColorState
  );

  const handleClick = useCallback(() => {
    console.log('click')
    setShown(true);
  }, []);

  const handleChangeComplete = useCallback(
    (color) => {
      setBackgroundColor(color.hex);
    },
    [setBackgroundColor]
  );

  useEffect(() => {
    function hidePopup(e) {
      if (e.target.closest("#color-picker")) return;
      setShown(false);
    }

    document.body.addEventListener("click", hidePopup);

    return () => {
      document.body.removeEventListener("click", hidePopup);
    };
  }, []);

  return (
    <View style={styles.root} onClick={handleClick}>
      <View style={[styles.inner, { backgroundColor: backgroundColor }]} />
      {shown && (
        <View style={styles.popup} nativeID="color-picker">
          <SketchPicker
            color={backgroundColor}
            onChangeComplete={handleChangeComplete}
          />
        </View>
      )}
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
