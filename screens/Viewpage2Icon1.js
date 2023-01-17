import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Viewpage2Icon1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.viewpage2Icon}
      resizeMode="cover"
      source={require("../assets/viewpage2.png")}
    >
      <Image
        style={styles.istock1480363321Icon}
        resizeMode="cover"
        source={require("../assets/istock148036332-1.png")}
      />
      <Image
        style={styles.viewpage2Child}
        resizeMode="cover"
        source={require("../assets/group-97.png")}
      />
      <Text style={styles.paketDiengPlateu}>Paket Dieng Plateu</Text>
      <Image
        style={[styles.viewpage2Item, styles.viewpage2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-128.png")}
      />
      <Image
        style={[styles.viewpage2Inner, styles.viewpage2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-128.png")}
      />
      <Image
        style={[styles.groupIcon, styles.viewpage2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-128.png")}
      />
      <Image
        style={[styles.viewpage2Child1, styles.viewpage2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-128.png")}
      />
      <Image
        style={[styles.viewpage2Child2, styles.viewpage2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-128.png")}
      />
      <Text style={[styles.text, styles.reviewsTypo, styles.textPosition]}>
        4.79
      </Text>
      <Text style={[styles.seeReviews, styles.reviewsTypo]}>See reviews</Text>
      <Text style={[styles.reviews, styles.reviewsTypo, styles.textPosition]}>
        (78 reviews)
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.viewpage2Child3Layout]}
        onPress={() => navigation.navigate("ProdukDetail1")}
      />
      <Pressable
        style={[styles.viewpage2Child3, styles.viewpage2Child3Layout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HalamanDepan" })
        }
      />
      <Text style={[styles.lihatRencana, styles.lihatTypo]}>Lihat rencana</Text>
      <Text style={[styles.lihatLainnya, styles.lihatTypo]}>Lihat Lainnya</Text>
      <Image
        style={styles.viewpage2Child4}
        resizeMode="cover"
        source={require("../assets/group-1004.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewpage2ChildLayout: {
    height: 16,
    width: 16,
    top: 724,
    position: "absolute",
  },
  reviewsTypo: {
    fontFamily: "Poppins",
    lineHeight: 23,
    fontSize: 14,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 721,
    lineHeight: 23,
    fontSize: 14,
  },
  viewpage2Child3Layout: {
    height: 54,
    width: 168,
    borderRadius: 41,
    top: 781,
    position: "absolute",
  },
  lihatTypo: {
    fontWeight: "500",
    lineHeight: 26,
    fontSize: 16,
    top: 795,
    fontFamily: "Poppins",
    textAlign: "left",
    position: "absolute",
  },
  istock1480363321Icon: {
    top: 0,
    left: 0,
    width: 583,
    position: "absolute",
    height: 874,
  },
  viewpage2Child: {
    top: 77,
    left: 17,
    width: 24,
    height: 24,
    position: "absolute",
  },
  paketDiengPlateu: {
    top: 558,
    left: 21,
    fontSize: 42,
    fontFamily: "Andika",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  viewpage2Item: {
    left: 23,
  },
  viewpage2Inner: {
    left: 42,
  },
  groupIcon: {
    left: 61,
  },
  viewpage2Child1: {
    left: 80,
  },
  viewpage2Child2: {
    left: 99,
  },
  text: {
    left: 125,
    color: "#fff",
  },
  seeReviews: {
    top: 720,
    left: 299,
    color: "#fff",
  },
  reviews: {
    left: 155,
    color: "rgba(255, 255, 255, 0.8)",
  },
  rectanglePressable: {
    left: 24,
    backgroundColor: "#0373f3",
  },
  viewpage2Child3: {
    left: 213,
    backgroundColor: "#fff",
  },
  lihatRencana: {
    left: 52,
    color: "#fff",
  },
  lihatLainnya: {
    left: 246,
    color: "#000",
  },
  viewpage2Child4: {
    top: 70,
    left: 26,
    width: 28,
    height: 28,
    position: "absolute",
  },
  viewpage2Icon: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 874,
  },
});

export default Viewpage2Icon1;
