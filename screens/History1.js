import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const History1 = () => {
  return (
    <View style={styles.history}>
      <Image
        style={styles.d7f65d83d0b91Icon}
        resizeMode="cover"
        source={require("../assets/5d7f65d83d0b9-1.png")}
      />
      <Image
        style={[styles.yogyakartaIndonesiaTuguYogyIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/yogyakarta-indonesia-tuguyogyakarta02-1.png")}
      />
      <Image
        style={styles.acf7eab903ce4049A693E3bbf0Icon}
        resizeMode="cover"
        source={require("../assets/acf7eab903ce4049a693e3bbf05a2d87-169-2.png")}
      />
      <Image
        style={styles.historyChild}
        resizeMode="cover"
        source={require("../assets/group-100.png")}
      />
      <Text style={styles.historyPerjalananAnda}>History Perjalanan Anda</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-125.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-120.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1231.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1401.png")}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.keranjang, styles.profilTypo]}>Keranjang</Text>
        <Text style={[styles.history1, styles.profilTypo]}>History</Text>
        <Text style={[styles.profil, styles.profilTypo]}>Profil</Text>
      </View>
      <View style={styles.historyItem} />
      <Text style={[styles.dieng, styles.diengTypo]}>Dieng</Text>
      <Text style={[styles.candiArjuno, styles.candiArjunoTypo]}>
        Candi Arjuno
      </Text>
      <Image
        style={styles.historyInner}
        resizeMode="cover"
        source={require("../assets/group-6941.png")}
      />
      <Text
        style={[
          styles.tamanNasionalKomodo,
          styles.monumenTypo,
          styles.monumenTuguJogjaPosition,
        ]}
      >
        Taman Nasional Komodo , NTT
      </Text>
      <Text
        style={[
          styles.monumenTuguJogja,
          styles.monumenTypo,
          styles.monumenTuguJogjaPosition,
        ]}
      >
        Monumen Tugu Jogja, Jogjakarta
      </Text>
      <Text style={[styles.monumenTuguJogja1, styles.monumenTypo]}>
        Monumen Tugu Jogja, Jogjakarta
      </Text>
      <Image
        style={[styles.b5exyytot2iel6c8d6b32Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/b5exyytot2iel6c8d6b3-2.png")}
      />
      <View
        style={[
          styles.rectangleView,
          styles.historyChildLayout1,
          styles.rectangleViewLayout,
        ]}
      />
      <View
        style={[
          styles.historyChild1,
          styles.historyChildLayout1,
          styles.rectangleViewLayout,
        ]}
      />
      <View style={[styles.historyChild2, styles.historyChildLayout1]} />
      <Text style={[styles.ntt, styles.nttTypo]}>NTT</Text>
      <Text style={[styles.jogja, styles.diengTypo]}>Jogja</Text>
      <Text style={[styles.solo, styles.nttTypo]}>Solo</Text>
      <Text style={[styles.tamanNasionalKomodo1, styles.monumenTuguTypo]}>
        Taman Nasional Komodo
      </Text>
      <Text style={[styles.monumenTugu, styles.monumenTuguTypo]}>
        Monumen Tugu . DIY
      </Text>
      <Text style={[styles.keratonKasunananSurakarta, styles.candiArjunoTypo]}>
        Keraton Kasunanan Surakarta
      </Text>
      <Image
        style={[styles.historyChild3, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-69411.png")}
      />
      <Image
        style={[styles.historyChild4, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-69411.png")}
      />
      <Image
        style={[styles.historyChild5, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-69411.png")}
      />
      <Text style={[styles.pegununganDiengWonosobo, styles.monumenTypo]}>
        Pegunungan Dieng, Wonosobo
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 362,
    left: 29,
    borderRadius: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 100,
    width: 404,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    top: 25,
    height: 28,
    width: 28,
    position: "absolute",
  },
  profilTypo: {
    color: "#bcbcbc",
    height: 21,
    fontSize: 14,
    top: 57,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  diengTypo: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  candiArjunoTypo: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  monumenTypo: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins",
    position: "absolute",
  },
  monumenTuguJogjaPosition: {
    left: 37,
    fontSize: 18,
  },
  historyChildLayout1: {
    height: 39,
    width: 89,
    backgroundColor: "#0373f3",
    borderRadius: 10,
    position: "absolute",
  },
  rectangleViewLayout: {
    left: 276,
    height: 39,
    width: 89,
  },
  nttTypo: {
    left: 307,
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  monumenTuguTypo: {
    left: 66,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins",
    position: "absolute",
  },
  historyChildLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  d7f65d83d0b91Icon: {
    top: 851,
    width: 356,
    height: 210,
    borderRadius: 15,
    left: 35,
    position: "absolute",
  },
  yogyakartaIndonesiaTuguYogyIcon: {
    top: 619,
    height: 184,
  },
  acf7eab903ce4049A693E3bbf0Icon: {
    top: 161,
    width: 347,
    height: 174,
    left: 29,
    borderRadius: 15,
    position: "absolute",
  },
  historyChild: {
    top: 75,
    left: 23,
    height: 28,
    width: 28,
    position: "absolute",
  },
  historyPerjalananAnda: {
    top: 69,
    left: 61,
    fontSize: 26,
    lineHeight: 43,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: "Poppins",
    color: "#000",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
  },
  groupItem: {
    left: 35,
    top: 25,
  },
  groupInner: {
    left: 140,
  },
  groupIcon: {
    left: 245,
  },
  groupChild1: {
    left: 341,
  },
  home: {
    left: 28,
    color: "#0373f3",
    textAlign: "center",
    width: 42,
    height: 21,
    fontSize: 14,
    top: 57,
    fontFamily: "Poppins",
    position: "absolute",
  },
  keranjang: {
    left: 118,
    width: 73,
  },
  history1: {
    left: 238,
    width: 48,
  },
  profil: {
    left: 335,
    width: 34,
  },
  rectangleParent: {
    top: 1061,
  },
  historyItem: {
    top: 283,
    left: 271,
    width: 86,
    height: 32,
    backgroundColor: "#0373f3",
    borderRadius: 10,
    position: "absolute",
  },
  dieng: {
    top: 291,
    left: 291,
    width: 47,
    height: 17,
  },
  candiArjuno: {
    top: 183,
    left: 68,
    color: "rgba(255, 255, 255, 0.7)",
    width: 100,
    height: 15,
  },
  historyInner: {
    top: 185,
    width: 12,
    height: 11,
    left: 49,
    position: "absolute",
  },
  tamanNasionalKomodo: {
    top: 350,
  },
  monumenTuguJogja: {
    top: 584,
  },
  monumenTuguJogja1: {
    top: 816,
    left: 36,
  },
  b5exyytot2iel6c8d6b32Icon: {
    top: 386,
    height: 179,
  },
  rectangleView: {
    top: 500,
  },
  historyChild1: {
    top: 734,
  },
  historyChild2: {
    top: 1009,
    left: 278,
  },
  ntt: {
    top: 509,
  },
  jogja: {
    top: 743,
    left: 300,
  },
  solo: {
    top: 1018,
  },
  tamanNasionalKomodo1: {
    top: 409,
  },
  monumenTugu: {
    top: 643,
  },
  keratonKasunananSurakarta: {
    top: 875,
    left: 65,
    color: "#000",
    fontSize: 12,
  },
  historyChild3: {
    top: 411,
    left: 49,
  },
  historyChild4: {
    top: 645,
    left: 49,
  },
  historyChild5: {
    top: 877,
    left: 48,
  },
  pegununganDiengWonosobo: {
    top: 130,
    left: 38,
  },
  history: {
    flex: 1,
    width: "100%",
    height: 1161,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default History1;
