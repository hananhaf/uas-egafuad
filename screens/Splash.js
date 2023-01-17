import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("StartPage1")}
    >
      <Image
        style={styles.travelAppOrWebsiteLogo1}
        resizeMode="cover"
        source={require("../assets/travel-app-or-website-logo-1-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  travelAppOrWebsiteLogo1: {
    position: "absolute",
    top: 151,
    left: 0,
    width: 552,
    height: 568,
  },
  splash: {
    backgroundColor: "#0373f3",
    flex: 1,
    width: "100%",
    height: 870,
    overflow: "hidden",
  },
});

export default Splash;
