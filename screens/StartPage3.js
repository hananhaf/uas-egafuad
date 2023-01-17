import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartPage3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startPage3}>
      <Text style={[styles.pilihTempatDanContainer, styles.containerTypo]}>
        <Text style={styles.pilihTempatDan}>Pilih tempat dan tujuan</Text>
        <Text style={styles.rekreasiAnda}>rekreasi anda</Text>
      </Text>
      <Text style={[styles.rekreasiModernKelasContainer, styles.containerTypo]}>
        <Text style={styles.pilihTempatDan}>Rekreasi modern</Text>
        <Text style={styles.rekreasiAnda}>
          {" "}
          kelas satu di dunia dan metode hiburan
        </Text>
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LoginRegistrationPage1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-16.png")}
        />
      </Pressable>
      <Image
        style={styles.startPage3Child}
        resizeMode="cover"
        source={require("../assets/group-183.png")}
      />
      <Image
        style={styles.beachMonochromatic1Icon}
        resizeMode="cover"
        source={require("../assets/beach-monochromatic-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTypo: {
    textAlign: "center",
    fontFamily: "Poppins",
    position: "absolute",
  },
  pilihTempatDan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  rekreasiAnda: {
    margin: 0,
  },
  pilihTempatDanContainer: {
    top: 453,
    left: 37,
    fontSize: 28,
    letterSpacing: -0.4,
    fontWeight: "600",
    color: "#000",
    whiteSpace: "pre-wrap",
  },
  rekreasiModernKelasContainer: {
    top: 549,
    left: 24,
    fontSize: 18,
    letterSpacing: -0.3,
    color: "#b4b4b4",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 165,
    top: 648,
    width: 76,
    height: 76,
    position: "absolute",
  },
  startPage3Child: {
    top: 669,
    left: 186,
    width: 34,
    height: 34,
    position: "absolute",
  },
  beachMonochromatic1Icon: {
    top: 112,
    left: 0,
    width: 406,
    height: 306,
    position: "absolute",
    overflow: "hidden",
  },
  startPage3: {
    backgroundColor: "#fff",
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartPage3;
