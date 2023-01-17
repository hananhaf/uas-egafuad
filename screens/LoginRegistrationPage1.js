import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginRegistrationPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginRegistrationPage}>
      <Image
        style={styles.loginRegistrationPageChild}
        resizeMode="cover"
        source={require("../assets/group-1002.png")}
      />
      <Text style={styles.signIn}>Sign in</Text>
      <View style={[styles.loginRegistrationPageItem, styles.loginLayout]} />
      <View style={[styles.loginRegistrationPageInner, styles.loginLayout]} />
      <View
        style={[
          styles.rectangleView,
          styles.rectangleLayout,
          styles.rectangleViewPosition,
        ]}
      />
      <View
        style={[
          styles.loginRegistrationPageChild1,
          styles.rectangleLayout,
          styles.rectangleViewPosition,
        ]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HalamanDepan" })
        }
      />
      <Image
        style={[styles.facebookNegative, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/facebook--negative.png")}
      />
      <Image
        style={[styles.appleOriginal, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/apple--original.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-282.png")}
      />
      <Text style={[styles.enterEMailAddress, styles.passwordTypo]}>
        Enter e-mail address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={styles.orContinueWith}>Or continue with</Text>
      <Text style={[styles.continueWithApple, styles.continueTypo]}>
        Continue with Apple
      </Text>
      <Text style={[styles.continueWithFacebook, styles.continueTypo]}>
        Continue with Facebook
      </Text>
      <Text style={[styles.lanjut, styles.continueTypo]}>Lanjut</Text>
      <View
        style={[styles.loginRegistrationPageChild2, styles.loginChildLayout]}
      />
      <View
        style={[styles.loginRegistrationPageChild3, styles.loginChildLayout]}
      />
      <Image
        style={[styles.loginRegistrationPageChild4, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Pressable
        style={styles.belumPunyaAkunbuatContainer}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", {
            screen: "LoginRegistrationPage",
          })
        }
      >
        <Text style={styles.belumPunyaAkun}>Belum punya akun?</Text>
        <Text style={styles.buatAkunAnda}>Buat akun anda</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: 36,
    position: "absolute",
  },
  rectangleLayout: {
    height: 54,
    width: 356,
    borderRadius: 36,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 25,
    width: 356,
  },
  groupIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  passwordTypo: {
    color: "#adadad",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  continueTypo: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  loginChildLayout: {
    height: 1,
    width: 122,
    backgroundColor: "#e8e8e8",
    top: 393,
    position: "absolute",
  },
  loginRegistrationPageChild: {
    top: 74,
    width: 28,
    height: 28,
    left: 23,
    position: "absolute",
  },
  signIn: {
    top: 129,
    fontSize: 30,
    fontWeight: "600",
    color: "#1f1f1f",
    textAlign: "left",
    fontFamily: "Poppins",
    left: 24,
    position: "absolute",
  },
  loginRegistrationPageItem: {
    top: 192,
    left: 24,
  },
  loginRegistrationPageInner: {
    top: 259,
    left: 23,
  },
  rectangleView: {
    top: 442,
    backgroundColor: "#1f1f1f",
  },
  loginRegistrationPageChild1: {
    top: 517,
    backgroundColor: "#3b5896",
  },
  rectanglePressable: {
    top: 779,
    backgroundColor: "#0373f3",
    left: 24,
  },
  facebookNegative: {
    bottom: 315,
    left: 96,
    overflow: "hidden",
  },
  appleOriginal: {
    top: 458,
    left: 105,
    overflow: "hidden",
  },
  groupIcon: {
    top: 207,
    left: 43,
  },
  enterEMailAddress: {
    top: 205,
    left: 76,
  },
  password: {
    top: 272,
    left: 75,
  },
  orContinueWith: {
    top: 381,
    left: 137,
    color: "#000",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  continueWithApple: {
    top: 457,
    left: 141,
  },
  continueWithFacebook: {
    top: 532,
    left: 132,
  },
  lanjut: {
    top: 794,
    left: 164,
  },
  loginRegistrationPageChild2: {
    left: 1,
  },
  loginRegistrationPageChild3: {
    left: 282,
  },
  loginRegistrationPageChild4: {
    top: 274,
    left: 38,
  },
  belumPunyaAkun: {
    color: "#000",
  },
  buatAkunAnda: {
    color: "#0373f3",
  },
  belumPunyaAkunbuatContainer: {
    top: 325,
    left: 45,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "Poppins",
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

export default LoginRegistrationPage1;
