import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const PersonalCenter = () => {
  return (
    <View style={styles.personalCenter}>
      <Image
        style={styles.personalCenterChild}
        resizeMode="cover"
        source={require("../assets/group-100.png")}
      />
      <Text style={styles.egaFuadIbrahim}>Ega Fuad Ibrahim</Text>
      <View style={[styles.personalCenterItem, styles.personalLayout]} />
      <View style={[styles.personalCenterInner, styles.personalLayout]} />
      <View style={[styles.rectangleView, styles.personalLayout]} />
      <Image
        style={[styles.groupIcon, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-28.png")}
      />
      <Image
        style={[styles.personalCenterChild1, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-102.png")}
      />
      <Image
        style={[styles.personalCenterChild2, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Text style={[styles.egafuad1090gmailcom, styles.textTypo]}>
        egafuad1090@gmail.com
      </Text>
      <Text style={[styles.travelBlogger, styles.textTypo]}>
        Travel blogger
      </Text>
      <Text style={[styles.text, styles.textTypo]}>**************</Text>
      <Text style={[styles.eMailAddress, styles.passwordTypo]}>
        E-mail address
      </Text>
      <Text style={[styles.authenticate, styles.passwordTypo]}>
        Authenticate
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <View style={[styles.personalCenterChild3, styles.personalChildBg]} />
      <Text style={[styles.change, styles.changeTypo]}>Change</Text>
      <View style={[styles.personalCenterChild4, styles.personalChildBg]} />
      <Text style={[styles.simpan, styles.changeTypo]}>Simpan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  personalLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: 36,
    left: 23,
    position: "absolute",
  },
  personalChildLayout: {
    height: 22,
    width: 22,
    left: 42,
    position: "absolute",
  },
  textTypo: {
    color: "#272727",
    fontSize: 16,
    left: 75,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  passwordTypo: {
    color: "#adadad",
    fontSize: 14,
    left: 24,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  personalChildBg: {
    backgroundColor: "#0373f3",
    position: "absolute",
  },
  changeTypo: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  personalCenterChild: {
    top: 74,
    width: 28,
    height: 28,
    left: 23,
    position: "absolute",
  },
  egaFuadIbrahim: {
    top: 129,
    fontSize: 26,
    lineHeight: 43,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins",
    left: 23,
    position: "absolute",
  },
  personalCenterItem: {
    top: 231,
  },
  personalCenterInner: {
    top: 445,
  },
  rectangleView: {
    top: 338,
  },
  groupIcon: {
    top: 246,
  },
  personalCenterChild1: {
    top: 460,
  },
  personalCenterChild2: {
    top: 353,
  },
  egafuad1090gmailcom: {
    top: 244,
  },
  travelBlogger: {
    top: 459,
  },
  text: {
    top: 351,
  },
  eMailAddress: {
    top: 202,
  },
  authenticate: {
    top: 416,
  },
  password: {
    top: 309,
  },
  personalCenterChild3: {
    top: 345,
    left: 261,
    borderRadius: 19,
    width: 106,
    height: 36,
  },
  change: {
    left: 282,
    top: 351,
  },
  personalCenterChild4: {
    top: 779,
    width: 356,
    height: 54,
    borderRadius: 36,
    backgroundColor: "#0373f3",
    left: 23,
  },
  simpan: {
    top: 794,
    left: 178,
  },
  personalCenter: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 874,
    overflow: "hidden",
  },
});

export default PersonalCenter;
