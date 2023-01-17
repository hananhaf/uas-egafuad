import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HalamanDepan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanDepan}>
      <Text style={[styles.temukanPerjalananAnda, styles.searchTypo]}>
        Temukan perjalanan anda
      </Text>
      <Text style={styles.egaFuad}>Ega Fuad !</Text>
      <View style={styles.halamanDepanChild} />
      <Image
        style={styles.halamanDepanItem}
        resizeMode="cover"
        source={require("../assets/group-7.png")}
      />
      <Text style={[styles.search, styles.searchLayout, styles.searchTypo]}>
        Search...
      </Text>
      <Text style={[styles.rekomendasiUntukAnda, styles.promo11FlashTypo]}>
        Rekomendasi untuk anda
      </Text>
      <Text style={[styles.promo11Flash, styles.promo11FlashTypo]}>
        PROMO 1.1 Flash Sale
      </Text>
      <Text style={[styles.wisataDiengPlateuContainer, styles.containerTypo]}>
        <Text style={styles.wisataDiengPlateu}>{`Wisata Dieng Plateu `}</Text>
        <Text style={styles.jawaTengah}>- Jawa Tengah</Text>
      </Text>
      <Text style={[styles.tamanNasionalPulauContainer, styles.containerTypo]}>
        <Text style={styles.wisataDiengPlateu}>{`Taman Nasional `}</Text>
        <Text style={styles.jawaTengah}>Pulau Komodo</Text>
      </Text>
      <Text style={[styles.lokasiTerpopuler, styles.promo11FlashTypo]}>
        Lokasi Terpopuler
      </Text>
      <Image
        style={[styles.halamanDepanInner, styles.halamanDepanInnerLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-262.png")}
      />
      <Image
        style={[styles.groupIcon, styles.searchLayout]}
        resizeMode="cover"
        source={require("../assets/group-104.png")}
      />
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-462.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-463.png")}
        />
        <Text
          style={[
            styles.pegununganWonosobo,
            styles.gunungBromoTypo,
            styles.dariRp700000Position,
          ]}
        >
          Pegunungan Wonosobo
        </Text>
        <Text
          style={[
            styles.textTypo,
            styles.gunungBromoPosition,
            styles.textPosition,
          ]}
        >
          dari Rp 600.000
        </Text>
        <Text
          style={[
            styles.dariRp700000,
            styles.textTypo,
            styles.textPosition,
            styles.dariRp700000Position,
          ]}
        >
          dari Rp 700.000
        </Text>
        <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
          4.9
        </Text>
        <Text style={[styles.text1, styles.textTypo, styles.textPosition]}>
          5.0
        </Text>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/group-1282.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/group-1292.png")}
        />
        <Text style={[styles.gunungBromoPosition, styles.gunungBromoTypo]}>
          Gunung Bromo
        </Text>
      </View>
      <View style={styles.rectangleGroup}>
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-464.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-465.png")}
        />
        <Text style={[styles.locations, styles.textTypo]}>16 locations</Text>
        <Text style={[styles.locations1, styles.textTypo]}>22 locations</Text>
        <Text style={[styles.tawangmangu, styles.jogjakartaTypo]}>
          TawangMangu
        </Text>
        <Text style={[styles.diengPlateu, styles.jogjakartaTypo]}>
          Dieng Plateu
        </Text>
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4651.png")}
        />
        <Text style={[styles.locations2, styles.textTypo]}>36 locations</Text>
        <Text style={[styles.jogjakarta, styles.jogjakartaTypo]}>
          Jogjakarta
        </Text>
      </View>
      <Pressable
        style={styles.dieng1}
        onPress={() => navigation.navigate("Viewpage21")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/dieng-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.d8c64544d6561}
        onPress={() => navigation.navigate("Viewpage2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/5d8c64544d656-1.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.logoPesonaIndonesiaKementeIcon,
          styles.halamanDepanInnerLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/logo-pesona-indonesia-kementerian-pariwisata-1.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.keranjang, styles.profilTypo]}>Keranjang</Text>
      <Text style={[styles.history, styles.profilTypo]}>History</Text>
      <Text style={[styles.profil, styles.profilTypo]}>Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: 16,
  },
  searchLayout: {
    height: 26,
    position: "absolute",
  },
  promo11FlashTypo: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  containerTypo: {
    fontWeight: "300",
    fontSize: 14,
    top: 477,
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  halamanDepanInnerLayout: {
    height: 56,
    position: "absolute",
  },
  frameLayout1: {
    width: 230,
    top: 0,
    borderRadius: 15,
    height: 138,
    position: "absolute",
  },
  gunungBromoTypo: {
    fontFamily: "Andika",
    fontSize: 22,
    top: 67,
    textAlign: "left",
    position: "absolute",
  },
  dariRp700000Position: {
    left: 272,
    color: "#fff",
  },
  gunungBromoPosition: {
    left: 17,
    color: "#fff",
  },
  textPosition: {
    top: 103,
    fontSize: 12,
  },
  textTypo: {
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  frameLayout: {
    height: 16,
    width: 16,
    top: 103,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 142,
    height: 200,
    borderRadius: 15,
    top: 0,
    position: "absolute",
  },
  jogjakartaTypo: {
    top: 128,
    color: "#fff",
    fontFamily: "Andika",
    fontSize: 18,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  halamanChildLayout: {
    height: 28,
    width: 28,
    top: 1007,
    position: "absolute",
  },
  profilTypo: {
    color: "#bcbcbc",
    top: 1039,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  temukanPerjalananAnda: {
    top: 74,
    left: 18,
    fontWeight: "500",
    color: "#818181",
    position: "absolute",
  },
  egaFuad: {
    top: 102,
    fontSize: 26,
    color: "#000",
    fontWeight: "600",
    left: 24,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  halamanDepanChild: {
    top: 146,
    borderRadius: 25,
    borderStyle: "solid",
    borderColor: "#e9e9e9",
    borderWidth: 1,
    width: 281,
    height: 54,
    left: 24,
    position: "absolute",
  },
  halamanDepanItem: {
    left: 44,
    height: 24,
    width: 24,
    top: 159,
    position: "absolute",
  },
  search: {
    left: 77,
    color: "#a9a9a9",
    width: 67,
    top: 159,
  },
  rekomendasiUntukAnda: {
    top: 516,
    left: 27,
  },
  promo11Flash: {
    top: 238,
    left: 27,
  },
  wisataDiengPlateu: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  jawaTengah: {
    margin: 0,
  },
  wisataDiengPlateuContainer: {
    left: 27,
  },
  tamanNasionalPulauContainer: {
    left: 229,
  },
  lokasiTerpopuler: {
    top: 722,
    left: 24,
  },
  halamanDepanInner: {
    top: 145,
    left: 328,
    width: 52,
  },
  groupIcon: {
    top: 161,
    left: 342,
    width: 24,
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 255,
  },
  pegununganWonosobo: {
    color: "#fff",
  },
  dariRp700000: {
    color: "#fff",
  },
  text: {
    left: 176,
    color: "#fff",
  },
  text1: {
    left: 431,
    color: "#000",
  },
  frameInner: {
    left: 197,
  },
  frameChild1: {
    left: 452,
  },
  rectangleParent: {
    top: 562,
    right: -105,
    width: 485,
    height: 138,
    position: "absolute",
  },
  rectangleIcon: {
    left: 0,
  },
  frameChild2: {
    left: 167,
  },
  locations: {
    left: 34,
    color: "#fff",
    top: 159,
  },
  locations1: {
    left: 202,
    color: "#fff",
    top: 159,
  },
  tawangmangu: {
    left: 8,
  },
  diengPlateu: {
    left: 187,
  },
  frameChild3: {
    left: 333,
  },
  locations2: {
    left: 368,
    color: "#fff",
    top: 159,
  },
  jogjakarta: {
    left: 357,
  },
  rectangleGroup: {
    top: 764,
    right: -104,
    width: 490,
    height: 200,
    position: "absolute",
  },
  icon: {
    borderRadius: 15,
    height: "100%",
  },
  dieng1: {
    top: 281,
    width: 178,
    height: 192,
    left: 27,
    position: "absolute",
  },
  d8c64544d6561: {
    left: 217,
    top: 282,
    width: 168,
    height: 193,
    position: "absolute",
  },
  logoPesonaIndonesiaKementeIcon: {
    top: 225,
    width: 153,
    left: 227,
  },
  rectangleView: {
    top: 986,
    left: -2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
    width: 404,
    height: 84,
    position: "absolute",
  },
  home: {
    left: 26,
    color: "#0373f3",
    textAlign: "center",
    top: 1039,
    fontSize: 14,
    fontFamily: "Poppins",
    position: "absolute",
  },
  keranjang: {
    left: 117,
  },
  history: {
    left: 227,
  },
  profil: {
    left: 333,
  },
  halamanDepan: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    height: 1070,
    overflow: "hidden",
    width: "100%",
  },
});

export default HalamanDepan;
