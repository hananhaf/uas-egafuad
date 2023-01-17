import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginRegistrationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginRegistrationPage}>
      <Image
        style={styles.loginRegistrationPageChild}
        resizeMode="cover"
        source={require("../assets/group-1002.png")}
      />
      <Text style={[styles.signUp, styles.signUpTypo]}>{`Sign up `}</Text>
      <View style={[styles.loginRegistrationPageItem, styles.loginLayout]} />
      <View style={[styles.loginRegistrationPageInner, styles.loginLayout]} />
      <View style={[styles.rectangleView, styles.loginLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("LoginRegistrationPage1")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-281.png")}
      />
      <Image
        style={[styles.loginRegistrationPageChild1, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Image
        style={[styles.loginRegistrationPageChild2, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Text style={[styles.enterEMailAddress, styles.signUpTypo]}>
        Enter e-mail address
      </Text>
      <Text
        style={[
          styles.createAPassword,
          styles.passwordTypo,
          styles.passwordPosition,
        ]}
      >
        Create a password
      </Text>
      <Text
        style={[
          styles.repeatPassword,
          styles.passwordTypo,
          styles.passwordPosition,
        ]}
      >
        Repeat password
      </Text>
      <Text style={[styles.orContinueWith, styles.passwordTypo]}>
        Or continue with
      </Text>
      <Text style={[styles.orContinueWith1, styles.passwordTypo]}>
        Or continue with
      </Text>
      <Text style={[styles.orContinueWith2, styles.passwordTypo]}>
        Or continue with
      </Text>
      <Text style={[styles.iHaveReadContainer, styles.lanjutTypo]}>
        <Text style={styles.iHaveRead}>{`I have read the `}</Text>
        <Text style={styles.termsOfService}>Terms of Service</Text>
      </Text>
      <Text style={[styles.lanjut, styles.lanjutTypo]}>Lanjut</Text>
      <Image
        style={styles.loginRegistrationPageChild3}
        resizeMode="cover"
        source={require("../assets/group-115.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "left",
    color: "#1f1f1f",
    fontFamily: "Poppins",
    position: "absolute",
  },
  loginLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: 36,
    position: "absolute",
  },
  loginChildPosition: {
    left: 42,
    height: 22,
    width: 22,
    position: "absolute",
  },
  passwordTypo: {
    color: "#adadad",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  passwordPosition: {
    left: 75,
    color: "#adadad",
    fontSize: 16,
  },
  lanjutTypo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  loginRegistrationPageChild: {
    top: 74,
    width: 28,
    height: 28,
    left: 23,
    position: "absolute",
  },
  signUp: {
    top: 130,
    fontSize: 30,
    fontWeight: "600",
    left: 24,
  },
  loginRegistrationPageItem: {
    top: 225,
    left: 24,
  },
  loginRegistrationPageInner: {
    top: 332,
    left: 23,
  },
  rectangleView: {
    top: 439,
    left: 23,
  },
  rectanglePressable: {
    top: 779,
    backgroundColor: "#0373f3",
    width: 356,
    height: 54,
    borderRadius: 36,
    left: 24,
    position: "absolute",
  },
  groupIcon: {
    top: 240,
    left: 43,
    height: 22,
    width: 22,
    position: "absolute",
  },
  loginRegistrationPageChild1: {
    top: 347,
  },
  loginRegistrationPageChild2: {
    top: 454,
  },
  enterEMailAddress: {
    top: 238,
    left: 76,
    fontSize: 16,
  },
  createAPassword: {
    top: 345,
  },
  repeatPassword: {
    top: 452,
  },
  orContinueWith: {
    top: 196,
    left: 25,
    fontSize: 14,
  },
  orContinueWith1: {
    top: 303,
    fontSize: 14,
    left: 24,
  },
  orContinueWith2: {
    top: 410,
    fontSize: 14,
    left: 24,
  },
  iHaveRead: {
    color: "#000",
  },
  termsOfService: {
    color: "#0373f3",
  },
  iHaveReadContainer: {
    top: 521,
    left: 63,
    fontSize: 14,
  },
  lanjut: {
    top: 794,
    left: 164,
    color: "#fff",
    fontSize: 16,
  },
  loginRegistrationPageChild3: {
    top: 520,
    left: 34,
    width: 24,
    height: 24,
    position: "absolute",
  },
  loginRegistrationPage: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 870,
    overflow: "hidden",
  },
});

export default LoginRegistrationPage;
