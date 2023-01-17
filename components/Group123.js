import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.parent, style]}
      onPress={() => navigation.navigate("History")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/group-123.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  parent: {
    width: 28,
    height: 28,
  },
});

export default GroupComponent;
