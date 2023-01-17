import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startPage2}>
      <Text
        style={[styles.kustomHargaTerbaikContainer, styles.hargaContainerTypo]}
      >
        <Text style={styles.kustomHargaTerbaik}>Kustom harga terbaik</Text>
        <Text style={styles.liburanAnda}>liburan anda</Text>
      </Text>
      <Text
        style={[styles.hitungHargaTerendahContainer, styles.hargaContainerTypo]}
      >
        <Text
          style={styles.kustomHargaTerbaik}
        >{`Hitung harga terendah - tertinggi `}</Text>
        <Text style={styles.liburanAnda}>sesuai rencana anda</Text>
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartPage3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-16.png")}
        />
      </Pressable>
      <Image
        style={styles.startPage2Child}
        resizeMode="cover"
        source={require("../assets/group-183.png")}
      />
      <Image
        style={styles.startPage2Item}
        resizeMode="cover"
        source={require("../assets/group-6932.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hargaContainerTypo: {
    textAlign: "center",
    fontFamily: "Poppins",
    position: "absolute",
  },
  kustomHargaTerbaik: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  liburanAnda: {
    margin: 0,
  },
  kustomHargaTerbaikContainer: {
    top: 453,
    left: 51,
    fontSize: 28,
    letterSpacing: -0.4,
    fontWeight: "600",
    color: "#000",
  },
  hitungHargaTerendahContainer: {
    top: 549,
    left: 52,
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
  startPage2Child: {
    top: 669,
    left: 186,
    width: 34,
    height: 34,
    position: "absolute",
  },
  startPage2Item: {
    height: "37.44%",
    width: "81.83%",
    top: "10.59%",
    right: "9.2%",
    bottom: "51.97%",
    left: "8.97%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  startPage2: {
    backgroundColor: "#fff",
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartPage2;
