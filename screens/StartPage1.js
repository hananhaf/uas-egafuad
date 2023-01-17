import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startPage1}>
      <Text style={[styles.buatRencanaLiburanContainer, styles.containerTypo]}>
        <Text style={styles.buatRencanaLiburan}>{`Buat rencana liburan `}</Text>
        <Text style={styles.anda}>anda</Text>
      </Text>
      <Text
        style={[styles.rumuskanStrategiAndaContainer, styles.containerTypo]}
      >
        <Text
          style={styles.buatRencanaLiburan}
        >{`Rumuskan strategi Anda `}</Text>
        <Text style={styles.anda}>untuk menerima paket hadiah yang indah</Text>
      </Text>
      <Image
        style={styles.startPage1Child}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartPage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-183.png")}
        />
      </Pressable>
      <Image
        style={styles.travelingMonochromatic1Icon}
        resizeMode="cover"
        source={require("../assets/traveling-monochromatic-1.png")}
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
  buatRencanaLiburan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anda: {
    margin: 0,
  },
  buatRencanaLiburanContainer: {
    top: 453,
    left: 53,
    fontSize: 28,
    letterSpacing: -0.4,
    fontWeight: "600",
    color: "#000",
  },
  rumuskanStrategiAndaContainer: {
    top: 549,
    left: 15,
    fontSize: 18,
    letterSpacing: -0.3,
    color: "#b4b4b4",
  },
  startPage1Child: {
    top: 648,
    left: 165,
    width: 76,
    height: 76,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 186,
    top: 669,
    width: 34,
    height: 34,
    position: "absolute",
  },
  travelingMonochromatic1Icon: {
    top: 102,
    left: 0,
    width: 406,
    height: 306,
    position: "absolute",
    overflow: "hidden",
  },
  startPage1: {
    backgroundColor: "#fff",
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartPage1;
