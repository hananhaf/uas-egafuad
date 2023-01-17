import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const GroupIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      resizeMode="cover"
      source={require("../assets/group-120.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 28,
    height: 28,
  },
});

export default GroupIcon1;
