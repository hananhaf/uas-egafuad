import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProdukDetail1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.produkDetail1}>
      <Text style={styles.perjalananAnda}>Perjalanan Anda</Text>
      <Text style={[styles.pegununganDiengWonosobo, styles.jadwalTypo]}>
        Pegunungan Dieng, Wonosobo
      </Text>
      <Text style={styles.helloegaFuad}>Hello,Ega Fuad</Text>
      <Image
        style={styles.acf7eab903ce4049A693E3bbf0Icon}
        resizeMode="cover"
        source={require("../assets/acf7eab903ce4049a693e3bbf05a2d87-169-1.png")}
      />
      <View style={styles.produkDetail1Child} />
      <Text style={styles.dieng}>Dieng</Text>
      <Text style={styles.candiArjuno}>Candi Arjuno</Text>
      <View style={styles.produkDetail1Item} />
      <Text style={[styles.text, styles.textTypo]}>09:30</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:30</Text>
      <Text style={[styles.text2, styles.textTypo]}>17:30</Text>
      <Text style={[styles.bromo, styles.bromoTypo]}>Bromo</Text>
      <Text style={[styles.dieng1, styles.bromoTypo]}>Dieng</Text>
      <Text style={[styles.candiArjuno1, styles.bromoTypo]}>Candi Arjuno</Text>
      <View style={styles.produkDetail1Inner} />
      <Image
        style={[styles.ellipseIcon, styles.produkChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.produkDetail1Child1, styles.produkChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.produkDetail1Child2, styles.produkChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <View
        style={[
          styles.rectangleView,
          styles.produkChildPosition,
          styles.rectangleViewBg,
        ]}
      />
      <View
        style={[
          styles.produkDetail1Child3,
          styles.produkChildPosition,
          styles.rectangleViewBg,
        ]}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-138.png")}
      />
      <Image
        style={[styles.produkDetail1Child4, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-141.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-125.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-120.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.groupLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "History" })
          }
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group-123.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.groupLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "PersonalCenter" })
          }
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group-140.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.keranjang, styles.profilTypo]}>Keranjang</Text>
        <Text style={[styles.history, styles.profilTypo]}>History</Text>
        <Text style={[styles.profil, styles.profilTypo]}>Profil</Text>
      </View>
      <Image
        style={[styles.produkDetail1Child5, styles.produkChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <View style={styles.moonCloudFastWind}>
        <Image
          style={[
            styles.moonCloudFastWind1,
            styles.moonLayout,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/moon-cloud-fast-wind.png")}
        />
      </View>
      <Image
        style={[styles.produkDetail1Child6, styles.produkChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <View style={[styles.cloud3Zap, styles.cloud3ZapPosition]}>
        <Image
          style={[
            styles.moonCloudFastWind1,
            styles.moonLayout,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/cloud-3-zap.png")}
        />
      </View>
      <Image
        style={[styles.produkDetail1Child7, styles.produkChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Image
        style={[
          styles.moonFastWind,
          styles.cloud3ZapPosition,
          styles.moonLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/moon-fast-wind.png")}
      />
      <View style={[styles.produkDetail1Child8, styles.produkChildPosition]} />
      <Image
        style={[styles.produkDetail1Child9, styles.produkChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <Image
        style={[styles.produkDetail1Child10, styles.produkChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <Text style={[styles.jadwal, styles.homePosition, styles.jadwalTypo]}>
        Jadwal
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jadwalTypo: {
    color: "#000",
    fontWeight: "500",
    textAlign: "left",
    fontSize: 18,
  },
  textTypo: {
    left: 22,
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: 18,
    position: "absolute",
  },
  bromoTypo: {
    fontSize: 16,
    left: 116,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  produkChildLayout2: {
    height: 26,
    width: 26,
    left: 71,
    position: "absolute",
  },
  produkChildPosition: {
    width: 2,
    left: 83,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: "#c4c4c4",
    width: 2,
    left: 83,
  },
  groupIconLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  groupChildLayout: {
    height: 100,
    width: 404,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    width: 28,
    top: 21,
    position: "absolute",
  },
  homePosition: {
    left: 28,
    fontFamily: "Poppins",
    position: "absolute",
  },
  profilTypo: {
    color: "#bcbcbc",
    top: 53,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  produkChildLayout1: {
    height: 43,
    width: 43,
    left: 336,
    position: "absolute",
  },
  moonLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cloud3ZapPosition: {
    left: "84.08%",
    right: "5.97%",
    width: "9.95%",
    height: "4.6%",
    position: "absolute",
  },
  produkChildLayout: {
    height: 22,
    width: 22,
    left: 73,
    position: "absolute",
  },
  perjalananAnda: {
    top: 77,
    color: "#6c6c6c",
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Poppins",
    left: 21,
    position: "absolute",
  },
  pegununganDiengWonosobo: {
    top: 186,
    fontFamily: "Poppins",
    left: 21,
    color: "#000",
    position: "absolute",
  },
  helloegaFuad: {
    top: 102,
    fontSize: 26,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins",
    left: 21,
    position: "absolute",
  },
  acf7eab903ce4049A693E3bbf0Icon: {
    top: 221,
    left: 25,
    borderRadius: 15,
    width: 354,
    height: 189,
    position: "absolute",
  },
  produkDetail1Child: {
    top: 339,
    left: 264,
    borderRadius: 10,
    width: 89,
    height: 39,
    backgroundColor: "#0373f3",
    position: "absolute",
  },
  dieng: {
    top: 348,
    left: 288,
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  candiArjuno: {
    top: 248,
    left: 54,
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "Poppins",
    position: "absolute",
  },
  produkDetail1Item: {
    top: 440,
    backgroundColor: "#f8f8f8",
    width: 402,
    height: 430,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 539,
  },
  text1: {
    top: 618,
  },
  text2: {
    top: 698,
  },
  bromo: {
    top: 527,
  },
  dieng1: {
    top: 606,
  },
  candiArjuno1: {
    top: 686,
  },
  produkDetail1Inner: {
    top: 452,
    left: 178,
    borderRadius: 25,
    backgroundColor: "#e2e2e2",
    width: 45,
    height: 5,
    position: "absolute",
  },
  ellipseIcon: {
    top: 539,
  },
  produkDetail1Child1: {
    top: 618,
  },
  produkDetail1Child2: {
    top: 698,
  },
  rectangleView: {
    height: 54,
    top: 565,
    backgroundColor: "#c4c4c4",
  },
  produkDetail1Child3: {
    top: 644,
    height: 55,
  },
  groupIcon: {
    top: 545,
    left: 77,
  },
  produkDetail1Child4: {
    top: 250,
    left: 37,
  },
  groupChild: {
    top: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
    width: 404,
  },
  groupItem: {
    left: 35,
  },
  groupInner: {
    left: 140,
  },
  wrapper: {
    left: 245,
  },
  container: {
    left: 341,
  },
  home: {
    color: "#0373f3",
    textAlign: "center",
    top: 53,
    left: 28,
    fontSize: 14,
  },
  keranjang: {
    left: 118,
  },
  history: {
    left: 238,
  },
  profil: {
    left: 335,
  },
  rectangleParent: {
    top: 770,
  },
  produkDetail1Child5: {
    top: 527,
  },
  moonCloudFastWind1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  moonCloudFastWind: {
    top: "60.34%",
    right: "6.22%",
    bottom: "35.06%",
    left: "83.83%",
    width: "9.95%",
    height: "4.6%",
    position: "absolute",
  },
  produkDetail1Child6: {
    top: 610,
  },
  cloud3Zap: {
    top: "70.11%",
    bottom: "25.29%",
  },
  produkDetail1Child7: {
    top: 692,
  },
  moonFastWind: {
    top: "79.66%",
    bottom: "15.75%",
  },
  produkDetail1Child8: {
    width: 2,
    left: 83,
    top: 565,
    height: 26,
    backgroundColor: "#0373f3",
  },
  produkDetail1Child9: {
    top: 620,
  },
  produkDetail1Child10: {
    top: 700,
  },
  jadwal: {
    top: 483,
  },
  produkDetail1: {
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default ProdukDetail1;
